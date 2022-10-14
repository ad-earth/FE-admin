import styles from "./keywordRanking.module.scss";
import useKeywordRanking from "./useKeywordRanking";

const KeywordRanking = () => {
  const data: string[] = useKeywordRanking();

  const rankingList = data?.map((list, index) => (
    <li key={index}>
      <span className={styles.ranking}>{index + 1}</span>
      {list}
    </li>
  ));
  
  return (
    <section id={styles.KeywordRanking}>
      <h3>광고 키워드 순위</h3>
      <ul>{rankingList}</ul>
    </section>
  );
};

export default KeywordRanking;
