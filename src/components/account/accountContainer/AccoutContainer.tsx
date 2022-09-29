import FindFormBox from "../findFormBox/FindFormBox";
import "./_accountContainer.style.scss";
import logo from "../../../assets/logo/logo.svg";

const AccoutContainer = () => {
  return (
    <div className="container">
      <div className="accountWrapper">
        <img src={logo} className="logo" />
        <FindFormBox />
      </div>
    </div>
  );
};

export default AccoutContainer;
