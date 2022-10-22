import { useState, useEffect } from "react";
import { SmallBlueBtn } from "../../../elements/buttons/Buttons";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";

import SetAdTable from "../../tables/setAdTable/SetAdTable";
import AdButton from ".././adButton/AdButton";
import styles from "./setAdSection.module.scss";
import { useAdProducts } from "./useAdProducts";
import { useAdProd } from "./useAdProd";
import { Product } from "./useAdProducts";
import { ProductList } from "./useAdProd";
import useModal from "../../modal/useModal";
import { useSetRecoilState } from "recoil";
import { prodAdSeletedState, prodAdState } from "../../../store/prodAd";
import { useDelAdProd } from "./useDelAdProd";

const SetAdSection = () => {
  // 드롭다운 데이터
  const [selected, setSelected] = useState<string>("상품없음");
  const [selectList, setSelectList] = useState<string[]>(["상품없음"]);
  const [selectedPNo, setSelectedPNo] = useState<number>();
  const [copyList, setCopyList] = useState<Product[]>();
  //테이블 데이터
  const [list, setList] = useState<ProductList[]>();
  //체크박스 데이터
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  //삭제버튼 감지 ,키워드 등록 버튼 감지
  const [delhandler, setDelhandler] = useState<boolean>(false);
  const [addhandler, setAddhandler] = useState<boolean>(false);

  // 드롭다운 데이터 hook
  const { data: productList } = useAdProducts();
  // 테이블 데이터 hook
  const { data: tableLists } = useAdProd(selectedPNo);
  // console.log(tableLists?.data);

  // 드롭다운 데이터 가공
  useEffect(() => {
    if (productList?.data.productList.length > 0) {
      if (selected === "상품없음") {
        const pName = productList.data.productList.map((list) => list.p_Name);
        setCopyList(productList.data.productList);
        const pNo = productList.data.productList.map((list) => list.p_No);
        setSelected(pName[0]);
        setSelectedPNo(pNo[0]);
        setSelectList(pName);
      } else {
        const found = productList?.data.productList.find(
          (e) => e.p_Name === selected
        );
        // console.log(found);
        setSelectedPNo(found?.p_No);
      }
    } else setSelectList(["상품없음"]);
  }, [productList]);

  //조회 버튼 클릭시 상품 데이터 요청
  const selectClick = () => {
    const clickPNo = copyList.find((x) => x.p_Name === selected).p_No;
    setSelectedPNo(clickPNo);
  };
  //테이블 리스트 copy
  useEffect(() => {
    if (tableLists) {
      setList(tableLists.data.keywordList);
    }
  }, [tableLists]);

  const setProdAdSeletedState = useSetRecoilState(prodAdSeletedState);
  const setProdAdState = useSetRecoilState(prodAdState);
  //rocoil data update
  useEffect(() => {
    selectedPNo &&
      setProdAdSeletedState({
        pNo: selectedPNo,
        pName: selected,
      });
  }, [selectedPNo]);

  const { showModal } = useModal();
  // 키워드 추가 버튼 클릭 => 모달 open
  useEffect(() => {
    if (addhandler) {
      selectedPNo &&
        list.length < 20 &&
        showModal({
          modalType: "PostAdModal",
          modalProps: {
            title: "광고등록",
          },
        });
      setProdAdState({ adStatus: true });
      !selectedPNo && alert("상품을 먼저 등록해주세요");
      list.length >= 20 && alert("상품당 키워드는 20개 까지 가능합니다.");
    }
    setAddhandler(false);
  }, [addhandler]);

  // 데이터 삭제 hook
  const { mutate, isLoading, isError, error, isSuccess } =
    useDelAdProd(selectedPNo);
  //키워드 삭제
  useEffect(() => {
    if (delhandler) {
      checkedItems.length !== 0
        ? mutate(checkedItems, {
            onSuccess: () => {
              alert("삭제완료");
            },
          })
        : alert("삭제할 상품이 없습니다.");
    }
    setDelhandler(false);
  }, [delhandler]);

  return (
    <div id={styles.setAd}>
      <div className={styles.searchBox}>
        <MediumDropdown
          itemList={selectList}
          selected={selected}
          setSelected={setSelected}
        />
        <SmallBlueBtn onClick={selectClick}>조회</SmallBlueBtn>
      </div>
      <AdButton setDelhandler={setDelhandler} setAddhandler={setAddhandler} />
      <SetAdTable
        selected={selected}
        prodList={list}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
    </div>
  );
};

export default SetAdSection;
