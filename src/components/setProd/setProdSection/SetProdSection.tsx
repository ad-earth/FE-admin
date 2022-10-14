import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./setProdSection.module.scss";
// mui
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//components,elements
import SetProdTabel from "../../tables/setProdTable/SetProdTabel";
import ProdButton from "../prodButton/ProdButton";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { SmallBlueBtn } from "../../../elements/buttons/Buttons";
//hook
import { useSetProd } from "./useSetProd";
import { useDelProd } from "./useDelProd";
//type
import { List, Paginationtype } from "./setProdSection.type";

const SetProdSection = () => {
  const navigate = useNavigate();
  // 드롭다운 데이터
  const [selected, setSelected] = useState<string>("전체");
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
  const { data } = useSetProd(pagination.category, pagination.page);
  // 데이터 삭제 hook
  const { mutate, isLoading, isError, error, isSuccess } = useDelProd();

  // 데이터가 있을경우 페이지길이값, 데이터 useState
  useEffect(() => {
    if (data) {
      setList(data.data.list);
      setPageLength(Math.ceil(data.data.cnt / 10));
    }
    return;
  }, [data]);

  //페이지값이 변경될때 마다 해당 페이지 데이터 요청
  useEffect(() => {
    if (pageHandler) {
      setPagination({ ...pagination, page: pageHandler });
      setDefaultPage(pageHandler);
    }
  }, [pageHandler]);

  //페이지 번호 가져오기
  const pageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setpageHandler(page);
  };

  //조회 버튼 클릭시 카테고리 데이터 요청
  const selectClick = () => {
    setDefaultPage(1);
    setPagination({ category: selected, page: 1 });
  };
  //상품등록 페이지 이동
  useEffect(() => {
    addhandler && navigate("/postProd");
  }, [addhandler]);
  //상품 삭제
  useEffect(() => {
    // if (delhandler) {
    //   checkedItems.length !== 0
    //     ? mutate(checkedItems, {
    //         onSuccess: () => {
    //           alert("삭제완료");
    //         },
    //       })
    //     : alert("삭제할 상품이 없습니다.");
    // }
    setDelhandler(false);
  }, [delhandler]);

  return (
    <div id={styles.setProd}>
      <div className={styles.searchBox}>
        <MediumDropdown
          itemList={selectList}
          selected={selected}
          setSelected={setSelected}
        />
        <SmallBlueBtn onClick={selectClick}>조회</SmallBlueBtn>
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

//default data
const selectList = [
  "전체",
  "욕실",
  "주방",
  "음료용품",
  "식품",
  "생활",
  "화장품",
  "문구",
];
const theme = createTheme({
  palette: {
    primary: {
      main: "#4e60ff",
    },
  },
});
