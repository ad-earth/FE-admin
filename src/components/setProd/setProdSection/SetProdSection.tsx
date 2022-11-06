import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./setProdSection.module.scss";
// mui
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//components,elements
import SetProdTabel from "../../tables/setProdTable/SetProdTable";
import ProdButton from "../prodButton/ProdButton";

//hook
import { useSetProdQuery } from "./useSetProdQuery";
import { useDelProdQuery } from "./useDelProdQuery";
//type
import { List, Paginationtype } from "./setProdSection.type";
import ProdFilter from "../prodFilter/ProdFilter";

const SetProdSection = () => {
  const navigate = useNavigate();

  // 드롭다운 데이터
  const [filterData, setFilterData] = useState("전체");
  // 페이지네이션
  const [pagination, setPagination] = useState<Paginationtype>({
    category: "전체",
    page: 1,
  });
  //테이블 데이터
  const [list, setList] = useState<List[]>();
  //테이블 페이지 길이
  const [pageLength, setPageLength] = useState<number>();
  //현재 페이지 위치 감지
  const [pageHandler, setpageHandler] = useState<number>();
  //카테고리 변경시 reset될 defaultPage값
  const [defaultPage, setDefaultPage] = useState<number>(pageHandler);
  //체크박스 데이터
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  //삭제버튼 감지
  const [delhandler, setDelhandler] = useState<boolean>(false);
  //추가버튼 감지
  const [addhandler, setAddhandler] = useState<boolean>(false);

  // 테이블 데이터 hook
  const { data: tabelData } = useSetProdQuery(
    pagination.category,
    pagination.page
  );
  // 데이터 삭제 hook
  const { mutate } = useDelProdQuery();

  // 데이터가 있을경우 페이지길이값, 데이터 useState
  useEffect(() => {
    if (!tabelData) return;
    setList(tabelData.data.list);
    setPageLength(Math.ceil(tabelData?.data.cnt / 10));
  }, [tabelData]);

  //페이지값이 변경될때 마다 해당 페이지 데이터 요청
  useEffect(() => {
    if (!pageHandler) return;
    setPagination({ ...pagination, page: pageHandler });
    setDefaultPage(pageHandler);
    setCheckedItems([]);
  }, [pageHandler]);

  //페이지 번호 가져오기
  const pageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setpageHandler(page);
  };

  // 카테고리별 데이터 요청
  useEffect(() => {
    if (!filterData) return;
    setDefaultPage(1);
    setPagination({ category: filterData, page: 1 });
    setCheckedItems([]);
  }, [filterData]);

  //상품등록 페이지 이동
  useEffect(() => {
    if (!addhandler) return;
    navigate("/postProd");
  }, [addhandler]);

  //상품 삭제
  useEffect(() => {
    if (!delhandler) return;
    checkedItems.length !== 0
      ? mutate(checkedItems, {
          onSuccess: () => {
            alert("삭제완료");
          },
        })
      : alert("삭제할 상품이 없습니다.");
    setDelhandler(false);
  }, [delhandler]);

  return (
    <div id={styles.setProd}>
      <div className={styles.searchBox}>
        <ProdFilter setFilterData={setFilterData} />
      </div>
      <ProdButton setDelhandler={setDelhandler} setAddhandler={setAddhandler} />
      <SetProdTabel
        prodList={list}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <ThemeProvider theme={theme}>
        <Pagination
          page={defaultPage ? defaultPage : 1}
          count={pageLength}
          onChange={pageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          className={styles.pagination}
        />
      </ThemeProvider>
    </div>
  );
};

export default SetProdSection;

const theme = createTheme({
  palette: {
    primary: {
      main: "#4e60ff",
    },
  },
});
