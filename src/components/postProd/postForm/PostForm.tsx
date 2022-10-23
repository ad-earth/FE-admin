import { useEffect, useMemo, useState } from "react";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import styles from "./postForm.module.scss";
import { Input100, Input250, Input500 } from "../../../elements/inputs/Inputs";
import ImgForm from "../imgForm/ImgForm";
import OptForm from "../optForm/OptForm";
import Editor from "../editor/Editor";
import { MediumBlueBtn, SmallBlueBtn } from "../../../elements/buttons/Buttons";
import { useTest } from "./usePostForm";

const cate = ["욕실", "주방", "음료용품", "생활", "식품", "화장품", "문구"];

const PostForm = () => {
  const [category, setCategory] = useState("");
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDiscount, setProdDiscount] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [thumb1Url, setThumb1Url] = useState("");
  const [thumb2Url, setThumb2Url] = useState("");
  const [contents, setContents] = useState("");
  console.log(contents);
  console.log("contents: ", typeof contents);

  const { mutate, isSuccess, data } = useTest(contents);

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
    }
  }, [isSuccess]);

  const handleTest = () => {
    mutate();
  };

  // 할인율 적용한 금액 렌더 함수
  const discountShow = useMemo(() => {
    if (prodPrice && prodDiscount) {
      const discountVal =
        Number(prodPrice) - (Number(prodPrice) / 100) * Number(prodDiscount);
      return <p>{discountVal}원</p>;
    } else {
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
                  value={prodDiscount}
                  placeholder={"0"}
                  setInput={setProdDiscount}
                  type={"number"}
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
            {/* 옵션 추가 버튼 */}

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
              <Editor contents={contents} setContents={setContents} />
            </div>
          </div>
        </section>
      </div>

      <div className={styles.btnWrap}>
        <MediumBlueBtn onClick={handleTest}>상품등록</MediumBlueBtn>
      </div>
    </div>
  );
};

export default PostForm;
