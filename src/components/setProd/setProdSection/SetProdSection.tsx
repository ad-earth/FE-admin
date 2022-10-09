import { useEffect, useState, useRef } from "react";
import { useQueryClient } from "react-query";
// mui
import { Pagination } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//components
import SetProdTabel from "../../tables/setProdTable/SetProdTabel";
//hook
import { useSetProd, fetchProd } from "./useSetProd";
//type
import { List } from "./setProdSection.type";
import ProdButton from "../prodButton/ProdButton";
import useDelProd from "./useDelProd";
// import { queryClient } from "react-query";

//default data
const selectList = ["전체", "욕실", "주방"];

const SetProdSection = () => {
  const ref = useRef<HTMLElement>();
  const refSelected = useRef<HTMLElement>();
  // 드롭다운 데이터
  const [selected, setSelected] = useState<string>();

  const [category, setCategory] = useState<string>(selected);
  //테이블 데이터
  const [list, setList] = useState<List[]>();
  //테이블 페이지 길이
  const [pageLength, setPageLength] = useState<number>();
  //현재 페이지 위치 감지
  const [pageHandler, setpageHandler] = useState<number>();
  // // 카테고리 변경시 reset될 defaultPage값
  const [defaultPage, setDefaultPage] = useState<number>(pageHandler);
  //체크박스 데이터
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  //삭제버튼 감지
  const [delhandler, setDelhandler] = useState<boolean>(false);
  //추가버튼 감지
  const [addhandler, setAddhandler] = useState<boolean>(false);

  //조회 버튼 클릭
  const selectClick = () => {
    // refetch();
    // // setCategory(selected);
    // // setDefaultPage(1);
  };

  //상품등록
  useEffect(() => {
    // addhandler &&
  }, [addhandler]);

  //드롭다운 카테고리 선택
  const handleChange = (e: SelectChangeEvent) => setSelected(e.target.value);

  //페이지 버튼 가져오기
  const pageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setpageHandler(page);
  };

  return (
    <div id="setProd">
      <div className="searchBox">
        <FormControl sx={{ m: 0, minWidth: 120 }}>
          <Select
            value={selected ? selected : selectList[0]}
            onChange={handleChange}
            ref={refSelected}
          >
            {selectList.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button onClick={selectClick}>조회</button>
      </div>
      <ProdButton setDelhandler={setDelhandler} setAddhandler={setAddhandler} />
      <SetProdTabel
        prodList={list}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <Pagination
        page={defaultPage ? defaultPage : 1}
        count={pageLength}
        variant="outlined"
        shape="rounded"
        onChange={pageChange}
        ref={ref}
      />
    </div>
  );
};

export default SetProdSection;
