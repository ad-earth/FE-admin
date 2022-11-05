import styles from "./serviceContainer.module.scss";
import { useState } from "react";
import ServiceTable from "../../tables/serviceTable/ServiceTable";
import ParcelFilter from "../parcelFilter/ParcelFilter";

const ServiceContainer = () => {
  return (
    <div className={styles.tableContainer}>
      <ParcelFilter />
      <ServiceTable />
    </div>
  );
};

export default ServiceContainer;
