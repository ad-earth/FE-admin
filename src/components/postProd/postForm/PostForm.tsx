import { useState } from "react";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import styles from "./postForm.module.scss";
import {
  Input100,
  Input200,
  Input250,
  Input500,
} from "../../../elements/inputs/Inputs";
import ImgForm from "../imgForm/ImgForm";
import { MediumBlueBtn, SmallBlueBtn } from "../../../elements/buttons/Buttons";

const category = [
  "욕실",
  "주방",
  "음료용품",
  "생활",
  "식품",
  "화장품",
  "문구",
  "욕실",
  "주방",
  "음료용품",
  "생활",
  "식품",
  "화장품",
  "문구",
  "욕실",
  "주방",
  "음료용품",
  "생활",
  "식품",
  "화장품",
  "문구",
  "욕실",
  "주방",
  "음료용품",
  "생활",
  "식품",
  "화장품",
  "문구",
];

const PostForm = () => {
  const [selected, setSelected] = useState("");

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
          <div className={styles.right}>
            <div className={styles.content}>
              <MediumDropdown
                id={"전체"}
                placeholder={"전체"}
                itemList={category}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <div className={styles.content}>
              <Input500 />
            </div>
            <div className={styles.content}>
              <div className={styles.contWrap}>
                <Input250 />
                <span>원</span>
              </div>
              <p>할인율</p>
              <div className={styles.contWrap}>
                <Input100 />
                <span>%</span>
                <p>1000원</p>
              </div>
            </div>
            <div className={styles.content}>
              <textarea className={styles.textArea} placeholder="5~30자 제한" />
            </div>
            <div className={styles.content}>
              <ImgForm />
            </div>
            <div className={styles.content}>
              <input className={styles.check} type="radio" />
              <label>없음</label>
              <input className={styles.check} type="radio" />
              <label>사용</label>
              <Input200 placeholder={"수량"} />
            </div>
            <SmallBlueBtn>옵션 추가</SmallBlueBtn>
            <div className={styles.content}>
              <div className={styles.optWrap}>
                <div className={styles.optTitleWrap}>
                  <p className={styles.optTitle}>사이즈</p>
                  <p className={styles.optTitle}>색상</p>
                  <p className={styles.optTitle}>추가금액</p>
                  <p className={styles.optTitle}>수량</p>
                </div>
                <div className={styles.optInputWrap}>
                  {/* <MediumDropdown
                    itemList={category}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <MediumDropdown
                    itemList={category}
                    selected={selected}
                    setSelected={setSelected}
                  /> */}
                  <Input200 placeholder={"0"} />
                  <Input200 placeholder={"0"} />
                  <p className={styles.del}>삭제</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.left}>
            <p>상세 내용</p>
          </div>
          <div className={styles.right}>
            <div className={styles.quill}>퀼이 들어갈자리</div>
          </div>
        </section>
      </div>
      <div className={styles.btnWrap}>
        <MediumBlueBtn>상품등록</MediumBlueBtn>
      </div>
    </div>
  );
};

export default PostForm;
