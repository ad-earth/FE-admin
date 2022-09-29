import React from "react";
import "./adBanner.style.scss";
import character from "../../../assets/bannerCharacter.svg";

const AdBanner = () => {
  return (
    <div id="adBanner">
      <h2 className="title">광고지구로 비즈니스 성장을 이루세요</h2>
      <p className="subtitle">
        CPC 키워드 광고를 통해 잠재적 고객을 찾아 비즈니스 성장을 경험해보세요
        <br />
        광고 입찰가를 높일수록 최상단에 광고가 노출됩니다. 지금 키워드 광고를
        등록해 보세요!
      </p>
      <img src={character} alt="광고지구캐릭터" />
    </div>
  );
};

export default AdBanner;
