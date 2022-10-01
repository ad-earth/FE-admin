import React, { useState } from "react";
import "./keywordRanking.style.scss";

const KeywordRanking = () => {
  let list = ["ss", "d", "sd", "sd", "sd", "ss", "sd", "ss", "ss", "ss"];
  const [rankingList, setRankingList] = useState<string[]>([]);

  const menuList = list.map((menu, index) => (
    <li key={index}>
      <span className="ranking">{index + 1}</span>
      {menu}
    </li>
  ));

  return (
    <section id="KeywordRanking">
      <h3>광고 키워드 순위</h3>
      <ul>{menuList}</ul>
    </section>
  );
};

export default KeywordRanking;
