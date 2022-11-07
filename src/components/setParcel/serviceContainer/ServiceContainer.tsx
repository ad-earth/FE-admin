import styles from "./serviceContainer.module.scss";
import ParcelFilter from "../parcelFilter/ParcelFilter";
import ServiceTable from "../../tables/serviceTable/ServiceTable";

const ServiceContainer = () => {
  return (
    <div className={styles.tableContainer}>
      <ParcelFilter />
      <ServiceTable />
    </div>
  );
};

export default ServiceContainer;
