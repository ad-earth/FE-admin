import styles from "./imgForm.module.scss";
import down from "../../../assets/lcon/down.png";

const ImgForm = () => {
  return (
    <div className={styles.imgDiv}>
      <img src={down} />
      <img src={down} />
    </div>
  );
};

export default ImgForm;
