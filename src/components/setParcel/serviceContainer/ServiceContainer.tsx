import Pagination from "@mui/material/Pagination";

import ServiceTable from "../../tables/serviceTable/ServiceTable";
import SearchBar from "../searchBar/SearchBar";
import "./_serviceContainer.style.scss";

const ServiceContainer = () => {
  return (
    <div>
      <h1>배송관리</h1>
      <div className="tableContainer">
        <SearchBar />
        <div className="buttonWrapper">
          <button>주문확정</button>
          <button>파일 내려받기</button>
        </div>
        <ServiceTable />
        <div className="pagination">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
