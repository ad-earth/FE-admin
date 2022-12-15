import { useEffect, useState } from "react";
import styles from "./slideBanner.module.scss";
import slideBanner1 from "../../../assets/slideBanner1.png";
import slideBanner2 from "../../../assets/slideBanner2.png";
import slideBanner3 from "../../../assets/slideBanner3.png";

//더미 데이터
const banners = [slideBanner1, slideBanner2, slideBanner3];
const SlideBanner = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  //autoPlay
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!isFocused) intervalId = setInterval(handleNext, 3000);
    return () => clearInterval(intervalId);
  }, [isFocused]);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % banners.length);

  const goTo = (idx: number) => setActiveIndex(idx);

  //포커스
  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);
  return (
    <div
      className={styles.base}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        <ul className={styles.carouselList}>
          {banners.map((url, idx) => (
            <li
              className={`
              ${styles.carouselListItem} 
              ${`${
                activeIndex === 0
                  ? `${styles.activeIndex0} `
                  : activeIndex === 1
                  ? `${styles.activeIndex1} `
                  : `${styles.activeIndex2} : ""`
              }`}
              `}
              key={idx}
            >
              <img src={url} alt="banner" />
            </li>
          ))}
        </ul>
        <ul className={styles.nav}>
          {Array.from({ length: banners.length }).map((_, idx) => (
            <li className={styles.navItem} key={idx}>
              <button
                className={`${styles.navBtn} ${`${
                  activeIndex === idx && `${styles.activeNav} `
                }`}`}
                onClick={() => goTo(idx)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlideBanner;
