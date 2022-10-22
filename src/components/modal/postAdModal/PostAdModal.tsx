import { useState, useEffect } from "react";
import styles from "./postAdModal.module.scss";
import cancel from "../../../assets/lcon/cancel.svg";
import PostAdTable from "../../tables/postAdTable/PostAdTable";
import Switch from "./switch/Switch";
//hook
import useModal from "../useModal";
import { Input290 } from "../../../elements/inputs/Inputs";
import { useAdLevel } from "./useAdLevel";
import { usePostAd, usePutAd } from "./usePostAd";
//recoil
import { useRecoilValue } from "recoil";
import { prodAd } from "../../../store/prodAd";
import { MediumBlueBtn, SmallGrayBtn } from "../../../elements/buttons/Buttons";

import Tooltip from "@mui/material/Tooltip";
import info from "../../../assets/lcon/info.svg";

export interface PostAdType {
  title: string;
}

interface ProdAdType {
  pNo?: number | null;
  pName?: string | null;
  keyword?: string | null;
  level?: number | undefined;
  levelCost?: number;
  cost?: number | null;
  adStatus?: boolean;
}

const PostAdModal = (props: PostAdType) => {
  const { title } = props;
  //modal sstate
  const { seleted, state } = useRecoilValue(prodAd);

  const [initalState, setInitalState] = useState<ProdAdType>({
    pNo: seleted.pNo, //제품 넘버
    pName: seleted.pName, //제품 이름
    keyword: state.keyword, //키워드
    level: state.level, //순위
    levelCost: 0, //순위별 예상금액
    cost: state.cost, //입찰가
    adStatus: state.adStatus, // 광고노출 상태
  });
  //키워드 입력 감지
  const [input, setInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  //광고 on/off 감지
  const [adStatus, setAdStatus] = useState<boolean>(initalState.adStatus);

  // 예상금액 검색 (항상 1위 데이터 )
  const keywordClick = () => {
    if (adStatus) {
      input !== "" && input !== " " && input?.length > 0
        ? setInitalState((prev) => ({ ...prev, keyword: input, level: 1 }))
        : alert("키워드를 입력해주세요");
    } else {
      alert("광고 스위치를 켜주세요");
    }
  };
  //순위별 예상금액 hook
  const { data: resLevelCost } = useAdLevel(
    initalState.pNo,
    initalState.keyword,
    initalState.level
  );
  //추가 hook
  const { mutate: addMutate } = usePostAd();
  //변경 hook
  const { mutate: changeMutate } = usePutAd();

  //예상금액 업데이트
  useEffect(() => {
    resLevelCost &&
      setInitalState((prev) => ({
        ...prev,
        levelCost: resLevelCost.data.levelCost,
      }));
  }, [resLevelCost]);

  //스위치 감지 업데이트
  useEffect(() => {
    if (adStatus) {
      setInitalState((prev) => ({
        ...prev,
        keyword: state.keyword ? state.keyword : "",
        level: 1,
        adStatus: true,
      }));
      console.log(initalState.keyword);
    } else {
      setInitalState((prev) => ({
        ...prev,
        keyword: state.keyword ? state.keyword : "",
        level: 5,
        levelCost: 0,
        cost: 0,
        adStatus: false,
      }));
      setInput("");
    }
  }, [adStatus]);

  //모달 닫기
  const { hideModal } = useModal();
  // console.log(initalState);
  //광고 추가 , 수정 버튼 클릭
  const btnClick = () => {
    const bodyData = {
      pNo: initalState.pNo,
      keyword: initalState.keyword,
      level: initalState.level,
      cost: initalState.cost,
      adStatus: initalState.adStatus,
    };

    switch (title) {
      case "광고등록":
        if (initalState.levelCost <= initalState.cost) {
          bodyData.keyword = input;
          addMutate(bodyData, {
            onSuccess: () => {
              alert("등록 완료");
              hideModal();
            },
            onError: (error) => {
              // const errMsg = error.response.data.errorMessage;
              setErrorMessage(error.response.data.errorMessage);
            },
          });
        } else {
          alert("입찰가가 예상금액보다 낮습니다.");
        }
        break;
      case "광고수정":
        if (bodyData.adStatus) {
          initalState.levelCost <= initalState.cost
            ? changeMutate(bodyData, {
                onSuccess: () => {
                  alert("수정 완료");
                  hideModal();
                },
              })
            : alert("입찰가가 예상금액보다 낮습니다.");
        } else {
          changeMutate(bodyData, {
            onSuccess: () => {
              alert("수정 완료");
              hideModal();
            },
            onError: (error) => {
              setErrorMessage(error.response.data.errorMessage);
            },
          });
        }

        break;
      default:
        console.log(`err : ${title}`);
    }
  };
  console.log(initalState.keyword);
  return (
    <div className={styles.postAdModal}>
      <div className={styles.modalContent}>
        <div className={styles.head}>
          <h3>{title}</h3>
          <img src={cancel} alt="닫기" onClick={() => hideModal()} />
        </div>
        <>
          <div className={styles.info}>
            <h5>상품</h5>
            <Tooltip title="광고 등록될 상품정보" placement="top" arrow>
              <img src={info} alt="infoIcon" />
            </Tooltip>
          </div>
          <span>{initalState.pName}</span>
        </>
        <>
          <div className={styles.info}>
            <h5>광고 on/off</h5>
            <Tooltip
              title="광고를 등록하시려면 스위치를 켜주세요. "
              placement="top"
              arrow
            >
              <img src={info} alt="infoIcon" />
            </Tooltip>
          </div>
          <Switch
            checked={initalState.adStatus}
            setAdStatus={setAdStatus}
            adStatus={adStatus}
          />
        </>
        <>
          <div className={styles.info}>
            <h5>키워드</h5>
            <Tooltip
              title="광고등록 키워드. 키워드는 상품별 최대 20개 까지 가능합니다."
              placement="top"
              arrow
            >
              <img src={info} alt="infoIcon" />
            </Tooltip>
          </div>
          {title === "광고수정" ? (
            <span>{state.keyword}</span>
          ) : (
            <div className={styles.form}>
              <Input290
                placeholder="키워드 입력"
                value={input || ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
              />
              {initalState.adStatus && (
                <SmallGrayBtn onClick={keywordClick}>조회</SmallGrayBtn>
              )}
            </div>
          )}
        </>
        {initalState.adStatus && (
          <PostAdTable
            initalState={initalState}
            setInitalState={setInitalState}
          />
        )}

        {errorMessage && <span className={styles.errMsg}>{errorMessage}</span>}
        <MediumBlueBtn onClick={btnClick}>{title}</MediumBlueBtn>
      </div>
    </div>
  );
};
export default PostAdModal;
