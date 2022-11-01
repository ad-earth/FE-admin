import { useState, useEffect } from "react";
import styles from "./postAdModal.module.scss";
import cancel from "../../../assets/lcon/cancel.svg";
import PostAdTable from "../../tables/postAdTable/PostAdTable";
import Switch from "./switch/Switch";
import useModal from "../useModal";
import { Input290 } from "../../../elements/inputs/Inputs";
import { useAdLevelQuery } from "./useAdLevelQuery";
import { usePostAdQuery, usePutAdQuery } from "./usePostAdQuery";
import { useRecoilValue } from "recoil";
import { prodAd } from "../../../store/prodAd";
import { MediumBlueBtn, SmallGrayBtn } from "../../../elements/buttons/Buttons";
import Tooltip from "@mui/material/Tooltip";
import info from "../../../assets/lcon/info.svg";
import { PostAdType, InitalStateType } from "./postAdModal.type";

const PostAdModal = ({ title }: PostAdType) => {
  const { hideModal } = useModal();
  const { seleted, state } = useRecoilValue(prodAd);

  const [initalState, setInitalState] = useState<InitalStateType>({
    pNo: seleted.pNo, //제품 넘버
    pName: seleted.pName, //제품 이름
    keyword: state.keyword, //키워드
    level: state.level, //순위
    levelCost: 0, //순위별 예상금액
    cost: state.cost, //입찰가
    adStatus: state.adStatus, // 광고노출 상태
  });
  //순위별 예상금액 hook
  const { data: levelCostRes } = useAdLevelQuery(
    initalState.pNo,
    initalState.keyword,
    initalState.level
  );
  //추가,변경 hook
  const { mutate: addMutate } = usePostAdQuery();
  const { mutate: changeMutate } = usePutAdQuery();
  //키워드 입력 감지
  const [input, setInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  //광고 on/off 감지
  const [adStatus, setAdStatus] = useState<boolean>(initalState.adStatus);

  // 예상금액 검색 (항상 1위 데이터 )
  const keywordClick = () => {
    if (!adStatus) alert("광고 스위치를 켜주세요");
    input !== "" && input !== " " && input?.length > 0
      ? setInitalState({ ...initalState, keyword: input, level: 1 })
      : alert("키워드를 입력해주세요");
  };

  //예상금액 업데이트
  useEffect(() => {
    if (!levelCostRes) return;
    setInitalState((prev) => ({
      ...prev,
      levelCost: levelCostRes.data.levelCost,
    }));
  }, [levelCostRes]);

  //스위치 감지 업데이트
  useEffect(() => {
    if (adStatus) {
      setInitalState((prev) => ({
        ...prev,
        keyword: state.keyword ? state.keyword : "",
        level: state.level ? (state.level === 5 ? 1 : state.level) : 0,
        cost: state.cost ? state.cost : 0,
        adStatus: true,
      }));
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
      setErrorMessage("");
    }
  }, [adStatus]);

  const bodyData = {
    pNo: initalState.pNo,
    keyword: initalState.keyword,
    level: initalState.level,
    cost: initalState.cost,
    adStatus: initalState.adStatus,
  };
  //광고 추가 , 수정 버튼 클릭
  const btnClick = () => {
    switch (title) {
      case "광고등록":
        bodyData.keyword = input;
        if (bodyData.adStatus) {
          if (!bodyData.keyword)
            alert("키워드 등록 후 입찰가를 지정해 주세요 ");
          else {
            if (bodyData.level === 0)
              alert("키워드 조회 후 입찰가를 지정해주세요");
            else {
              if (initalState.levelCost > initalState.cost)
                alert("입찰가가 예상금액보다 낮습니다.");
              else {
                addMutate(bodyData, {
                  onSuccess: () => {
                    alert("등록 완료");
                    hideModal();
                  },
                  onError: (error) => {
                    setErrorMessage(error.response.data.errorMessage);
                  },
                });
              }
            }
          }
        } else {
          if (!bodyData.keyword) alert("키워드를 등록해주세요 ");
          else {
            console.log(bodyData);
            addMutate(bodyData, {
              onSuccess: () => {
                alert("등록 완료");
                hideModal();
              },
              onError: (error) => {
                setErrorMessage(error.response.data.errorMessage);
              },
            });
          }
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
                onError: (error) => {
                  setErrorMessage(error.response.data.errorMessage);
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

  function changeKeywordInput(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    var str_space = /\s/; // 공백 체크
    if (str_space.exec(val)) {
      alert("해당 항목에는 공백을 사용할 수 없습니다.\n공백이 제거됩니다.");
      return false;
    } else setInput(e.target.value);
  }

  const Head = (
    <div className={styles.head}>
      <h3>{title}</h3>
      <img src={cancel} alt="닫기" onClick={() => hideModal()} />
    </div>
  );

  return (
    <div className={styles.postAdModal}>
      <div className={styles.modalContent}>
        {Head}
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
          <Switch setAdStatus={setAdStatus} adStatus={adStatus} />
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
                onChange={(e) => changeKeywordInput(e)}
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
