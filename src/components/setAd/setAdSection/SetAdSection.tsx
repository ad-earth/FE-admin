import { useState, useEffect } from "react";
import styles from "./setAdSection.module.scss";
//components
import useModal from "../../modal/useModal";
import AdFilter from "../adFilter/AdFilter";
import AdButton from ".././adButton/AdButton";
import SetAdTable from "../../tables/setAdTable/SetAdTable";
//hook
import { useDelAdProd } from "./useDelAdProd";
import { useAdProd } from "./useAdProd";
//recoil
import { useSetRecoilState } from "recoil";
import { prodAdSeletedState, prodAdState } from "../../../store/prodAd";

interface FilterDataType {
  p_Name: string;
  p_No: number | null;
}
const SetAdSection = () => {
  const { showModal } = useModal();
  //상품 드롭다운 데이터 조회
  const [filterData, setFilterData] = useState<FilterDataType>({
    p_Name: "상품없음",
    p_No: null,
  });
  //테이블 데이터 조회 hook
  const { data: adTableResponse, isLoading } = useAdProd(filterData.p_No);
  const prodLength = adTableResponse?.data.cnt;
  const prodList = adTableResponse?.data;
  // 데이블 삭제 hook
  const { mutate } = useDelAdProd(filterData.p_No);

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
    filterData &&
      setProdAdSeletedState({
        pNo: filterData.p_No,
        pName: filterData.p_Name,
      });
    setCheckedItems([]);
  }, [filterData]);

  // 키워드 추가 버튼 클릭 => 모달 open
  useEffect(() => {
    const isModal = prodLength < 20;
    if (addhandler) {
      filterData.p_No && isModal
        ? showModal({
            modalType: "PostAdModal",
            modalProps: {
              title: "광고등록",
            },
          })
        : alert("상품당 키워드는 20개 까지 가능합니다.");
      setProdAdState({ adStatus: true });
      !filterData.p_No && alert("상품을 먼저 등록해주세요");
    }
    return () => setAddhandler(false);
  }, [addhandler]);

  // 키워드 삭제
  useEffect(() => {
    if (delhandler) {
      console.log(checkedItems);
      checkedItems.length !== 0
        ? mutate(checkedItems, {
            onSuccess: () => {
              alert("삭제완료");
              setCheckedItems([]);
            },
          })
        : alert("삭제할 상품이 없습니다.");
    }
    return () => setDelhandler(false);
  }, [delhandler]);

  return (
    <div id={styles.setAd}>
      <AdFilter setFilterData={setFilterData} />
      <AdButton
        setDelhandler={setDelhandler}
        setAddhandler={setAddhandler}
        prodLength={prodLength}
      />
      {!isLoading ? (
        <>
          {!filterData && <SetAdTable type="none" />}
          {adTableResponse && (
            <SetAdTable
              prodList={prodList}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />
          )}
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default SetAdSection;
