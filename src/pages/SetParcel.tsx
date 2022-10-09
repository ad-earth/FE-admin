import ServiceContainer from "../components/setParcel/serviceContainer/ServiceContainer";
import styles from "./styles/setParcel.module.scss";

const SetParcel = () => {
  return (
    <div>
      <h1 className={styles.title}>배송관리</h1>
      <ServiceContainer />
    </div>
  );
};

export default SetParcel;
