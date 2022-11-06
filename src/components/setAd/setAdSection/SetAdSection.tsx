import { useState, useEffect } from "react";
import styles from "./setAdSection.module.scss";
import useModal from "../../modal/useModal";
import AdFilter from "../adFilter/AdFilter";
import AdButton from ".././adButton/AdButton";
import SetAdTable from "../../tables/setAdTable/SetAdTable";
import { useDelAdProdQuery } from "./useDelAdProdQuery";
import { useAdProdQuery } from "./useAdProdQuery";
import { useSetRecoilState } from "recoil";
import { prodAdSeletedState, prodAdState } from "../../../store/prodAd";
import { FilterDataType } from "./setAdSection.type";

const SetAdSection = () => {
  const { showModal } = useModal();
  //상품 드롭다운 데이터 조회
  const [filterData, setFilterData] = useState<FilterDataType>({
    p_Name: "상품없음",
    p_No: null,
  });
  //테이블 데이터 조회 hook
  const { data: adTableRes, isLoading } = useAdProdQuery(filterData.p_No);
  const prodLength = adTableRes?.data.cnt;
  const prodList = adTableRes?.data;
  // 데이블 삭제 hook
  const { mutate } = useDelAdProdQuery(filterData.p_No);

  //체크박스 데이터
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  //삭제버튼 감지 ,키워드 등록 버튼 감지
  const [delhandler, setDelhandler] = useState<boolean>(false);
  const [addhandler, setAddhandler] = useState<boolean>(false);
  //recoil
  const setProdAdSeletedState = useSetRecoilState(prodAdSeletedState);
  const setProdAdState = useSetRecoilState(prodAdState);

  //rocoil data update
  useEffect(() => {
    if (!filterData) return;
    setProdAdSeletedState({
      pNo: filterData.p_No,
      pName: filterData.p_Name,
    });
    setCheckedItems([]);
  }, [filterData]);

  // 키워드 추가 버튼 클릭 => 모달 open
  useEffect(() => {
    if (!addhandler) return;
    setAddhandler(false);
    const isModal = prodLength < 20;
    if (!filterData.p_No) {
      alert("상품을 먼저 등록해주세요");
      return;
    } else if (isModal) {
      showModal({
        modalType: "PostAdModal",
        modalProps: {
          title: "광고등록",
        },
      });
      setProdAdState({ adStatus: true });
    } else alert("상품당 키워드는 20개 까지 가능합니다.");
  }, [addhandler]);

  // 키워드 삭제
  useEffect(() => {
    if (!delhandler) return;
    setDelhandler(false);
    checkedItems.length !== 0
      ? mutate(checkedItems, {
          onSuccess: () => {
            alert("삭제완료");
            setCheckedItems([]);
          },
        })
      : alert("삭제할 상품이 없습니다.");
  }, [delhandler]);

  return (
    <div id={styles.setAd}>
      <AdFilter setFilterData={setFilterData} />
      <AdButton
        setDelhandler={setDelhandler}
        setAddhandler={setAddhandler}
        prodLength={prodLength}
      />
      <>
        {filterData.p_Name === "상품없음" && <SetAdTable type="none" />}
        {adTableRes && (
          <SetAdTable
            prodList={prodList}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        )}
      </>
    </div>
  );
};

export default SetAdSection;
