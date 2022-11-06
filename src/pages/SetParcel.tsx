import styles from "./styles/setParcel.module.scss";
import ServiceContainer from "../components/setParcel/serviceContainer/ServiceContainer";

const SetParcel = () => {
  return (
    <>
      <h1 className={styles.title}>배송관리</h1>
      <ServiceContainer />
    </>
  );
};

export default SetParcel;
