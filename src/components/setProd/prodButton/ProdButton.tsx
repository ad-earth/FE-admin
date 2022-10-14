import { ProdDelBtn, SmallGrayBtn } from "../../../elements/buttons/Buttons";
import { PropsType } from "./prodButton.type";
import styles from "./prodButton.module.scss";

const ProdButton = ({ setDelhandler, setAddhandler }: PropsType) => {
  return (
    <div className={styles.btnBox}>
      <ProdDelBtn onClick={() => setDelhandler(true)} />
      <SmallGrayBtn onClick={() => setAddhandler(true)}>
        상품 등록
      </SmallGrayBtn>
    </div>
  );
};

export default ProdButton;
