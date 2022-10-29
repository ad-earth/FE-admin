import styles from "./keywordRanking.module.scss";
import useKeywordRankingQuery from "./useKeywordRankingQuery";

const KeywordRanking = () => {
  const { data: rankingRes } = useKeywordRankingQuery();

  const rankingList = rankingRes?.map((list, index) => (
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
