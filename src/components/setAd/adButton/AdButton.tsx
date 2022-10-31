import { ProdDelBtn, SmallGrayBtn } from "../../../elements/buttons/Buttons";
import styles from "./adButton.module.scss";
import { PropsType } from "./adButton.type";

const AdButton = ({ setDelhandler, setAddhandler }: PropsType) => {
  return (
    <div className={styles.btnBox}>
      <ProdDelBtn onClick={() => setDelhandler(true)} />
      <SmallGrayBtn onClick={() => setAddhandler(true)}>
        키워드 등록
      </SmallGrayBtn>
    </div>
  );
};

export default AdButton;
