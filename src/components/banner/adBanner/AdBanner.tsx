import styles from "./adBanner.module.scss";
import character from "../../../assets/bannerCharacter.svg";

//text
const title = "광고지구로 비즈니스 성장을 이루세요";
const subText1 =
  "CPC 키워드 광고를 통해 잠재적 고객을 찾아 비즈니스 성장을 경험해보세요";
const subText2 =
  "광고 입찰가를 높일수록 최상단에 광고가 노출됩니다. 지금 키워드 광고를등록해 보세요!";

const AdBanner = () => {
  return (
    <section id={styles.adBanner}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subText}>
        {subText1}
        <br />
        {subText2}
      </p>
      <img src={character} alt="광고지구캐릭터" />
    </section>
  );
};

export default AdBanner;
