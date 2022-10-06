import { Pagination } from "@mui/material";
import SetProdTabel from "../../tables/setProdTable/SetProdTabel";

const SetProdSection = () => {
  return (
    <div id="setProd">
      <div className="searchBox">
        <select name="cars" id="cars"></select>
        <button>조회</button>
      </div>
      <div className="tabelBox">
        <SetProdTabel />
      </div>
      <Pagination />
    </div>
  );
};

export default SetProdSection;
