import { ProdDelBtn, SmallGrayBtn } from "../../../elements/buttons/Buttons";
import styles from "./adButton.module.scss";
import { SetStateAction, Dispatch } from "react";

interface PropsType {
  setDelhandler: Dispatch<SetStateAction<boolean>>;
  setAddhandler: Dispatch<SetStateAction<boolean>>;
  prodLength: number;
}
const AdButton = ({ setDelhandler, setAddhandler, prodLength }: PropsType) => {
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
