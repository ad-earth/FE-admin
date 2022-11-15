import styles from "./postForm.module.scss";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

import ImgForm from "../imgForm/ImgForm";
import OptForm from "../optForm/OptForm";
import Editor from "../editor/Editor";
import { optList } from "../../../store/option";
import {
  MediumBlueBtn,
  MediumGrayBtn,
  MediumWhiteBtn,
} from "../../../elements/buttons/Buttons";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { Input100, Input250, Input500 } from "../../../elements/inputs/Inputs";
import {
  useDeleteProd,
  useEditProd,
  useGetProdInfo,
  usePostProd,
} from "./usePostForm";
import { prod } from "../../../store/prod";
import { useNavigate } from "react-router-dom";
import React from "react";

const cate = ["욕실", "주방", "음료용품", "생활", "식품", "화장품", "문구"];

const PostForm = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [prodName, setProdName] = useState<string>("");
  const [prodPrice, setProdPrice] = useState<string>("");
  const [isDiscount, setIsDiscount] = useState<boolean>(false);
  const [prodDiscount, setProdDiscount] = useState<number>(0);
  const [prodDesc, setProdDesc] = useState<string>("");
  const [thumb1Url, setThumb1Url] = useState<string>("");
  const [thumb2Url, setThumb2Url] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const option = useRecoilValue(optList);
  const status = useRecoilValue(prod);

  const EditorComponent = React.lazy(() => import("./../editor/Editor"));
  const { mutate: postMutate } = usePostProd();
  const { mutate: editMutate } = useEditProd();
  const { mutate } = useDeleteProd();
  const { data } = useGetProdInfo(status.prodNumber);

  useEffect(() => {
    if (data) {
      setCategory(data.data.p_Category);
      setProdName(data.data.p_Name);
      setProdPrice(data.data.p_Cost);
      setProdDiscount(data.data.p_Discount);
      setProdDesc(data.data.p_Desc);
      setThumb1Url(data.data.p_Thumbnail[0]);
      setThumb2Url(data.data.p_Thumbnail[1]);
      setContents(data.data.p_Content);
      console.log(data);
    }
  }, [data]);

  // 상품 등록 & 수정
  const handleSubmit = () => {
    const bodyData = {
      p_No: status.prodNumber,
      p_Category: category,
      p_Thumbnail: [thumb1Url, thumb2Url],
      p_Name: prodName,
      p_Cost: prodPrice,
      p_Sale: isDiscount,
      p_Discount: prodDiscount,
      p_Option: option,
      p_Desc: prodDesc,
      p_Content: contents,
    };
    if (!status.isProd) {
      postMutate(bodyData, {
        onSuccess: () => {
          alert("상품이 등록되었습니다.");
          navigate("/setProd");
        },
        onError: (error) => {
          const errMsg = error.response.data.message;
          alert(errMsg);
        },
      });
    } else if (status.isProd) {
      editMutate(bodyData, {
        onSuccess: () => {
          alert("상품이 수정되었습니다!");
          navigate("/setProd");
        },
        onError: (error) => {
          const errMsg = error.response.data.message;
          alert(errMsg);
        },
      });
    }
  };

  const handleDelete = () => {
    mutate([status.prodNumber], {
      onSuccess: () => {
        alert("상품을 삭제하였습니다.");
        navigate("/setProd");
      },
    });
  };

  // 할인율 적용한 금액 렌더 함수
  const discountShow = useMemo(() => {
    if (prodPrice && prodDiscount) {
      setIsDiscount(true);
      const discountVal =
        Number(prodPrice) - (Number(prodPrice) / 100) * Number(prodDiscount);
      return <p>{discountVal}원</p>;
    } else {
      setIsDiscount(false);
      return null;
    }
  }, [prodPrice, prodDiscount]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.section}>
          <div className={styles.left}>
            <p>카테고리</p>
            <p>상품명</p>
            <p>상품 가격</p>
            <p className={styles.gap1}>상품 설명</p>
            <p className={styles.gap2}>상품 이미지</p>
            <p>옵션 선택</p>
          </div>
          {/* 카테고리 선택 */}
          <div className={styles.right}>
            <div className={styles.content}>
              <MediumDropdown
                id={"상품선택"}
                placeholder={"상품선택"}
                itemList={cate}
                selected={category}
                setSelected={setCategory}
              />
            </div>
            {/* 상품 이름 입력 */}
            <div className={styles.content}>
              <Input500
                value={prodName}
                placeholder={"상품명"}
                setInput={setProdName}
              />
            </div>
            {/* 상품 가격 입력 */}
            <div className={styles.content}>
              <div className={styles.contWrap}>
                <Input250
                  value={prodPrice}
                  placeholder={"상품가격"}
                  setInput={setProdPrice}
                />
                <span>원</span>
              </div>
              {/* 할인율(%) 입력 */}
              <p>할인율</p>
              <div className={styles.contWrap}>
                <Input100
                  value={prodDiscount ? prodDiscount : ""}
                  placeholder="0"
                  setInputNum={setProdDiscount}
                  type="number"
                />
                <span>%</span>
                {discountShow}
              </div>
            </div>
            {/* 상품 설명 입력 */}
            <div className={styles.content}>
              <textarea
                className={styles.textArea}
                placeholder="5~30자 제한"
                value={prodDesc}
                onChange={(e) => setProdDesc(e.target.value)}
              />
            </div>
            {/* 썸네일 선택 */}
            <div className={styles.content}>
              <ImgForm
                thumb1Url={thumb1Url}
                thumb2Url={thumb2Url}
                setThumb1Url={setThumb1Url}
                setThumb2Url={setThumb2Url}
              />
            </div>
            {/* 옵션 선택 */}
            <div className={styles.content}>
              <OptForm />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.left}>
            <p>상세 내용</p>
          </div>
          {/* 상품 상세 내용 입력(퀼) */}
          <div className={styles.right}>
            <div className={styles.quill}>
              <EditorComponent contents={contents} setContents={setContents} />
            </div>
          </div>
        </section>
      </div>

      {status.isProd ? (
        <div className={styles.btns}>
          <MediumBlueBtn onClick={handleSubmit}>상품 수정</MediumBlueBtn>
          <MediumWhiteBtn onClick={handleDelete}>상품 삭제</MediumWhiteBtn>
          <MediumGrayBtn onClick={() => navigate("/setProd")}>
            취소
          </MediumGrayBtn>
        </div>
      ) : (
        <div className={styles.center}>
          <MediumBlueBtn onClick={handleSubmit}>상품등록</MediumBlueBtn>
        </div>
      )}
    </div>
  );
};

export default PostForm;
