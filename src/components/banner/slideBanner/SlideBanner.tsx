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
  console.log(activeIndex);
  return (
    <div
      className={styles.Base}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.Container}>
        <ul className={styles.CarouselList}>
          {banners.map((url, idx) => (
            <li
              className={`
              ${styles.CarouselListItem} 
              ${`
              ${
                activeIndex === 0
                  ? `${styles.activeIndex0} `
                  : activeIndex === 1
                  ? `${styles.activeIndex1} `
                  : `${styles.activeIndex2} : ""`
              }
            `}
              `}
              key={idx}
            >
              <img src={url} alt="banner" />
            </li>
          ))}
        </ul>
        <ul className={styles.Nav}>
          {Array.from({ length: banners.length }).map((_, idx) => (
            <li className={styles.NavItem} key={idx}>
              <button
                className={`
              ${styles.NavBtn} 
              ${`
              ${activeIndex === idx && `${styles.activeNav} `}
            `}
              `}
                // isActive={activeIndex === idx}
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
