import { useState, SetStateAction, Dispatch, useEffect } from "react";

const ProdButton = ({
  setDelhandler,
  setAddhandler,
}: {
  setDelhandler: Dispatch<SetStateAction<boolean>>;
  setAddhandler: Dispatch<SetStateAction<boolean>>;
}) => {
  function btnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const btn: HTMLButtonElement = e.currentTarget;
    btn.value === "del" && setDelhandler(true);
    btn.value === "add" && setAddhandler(true);
  }
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {};

  return (
    <div className="btnBox">
      <button value="del" onClick={btnClick}>
        상품 삭제
      </button>
      <button value="add" onClick={btnClick}>
        상품 등록
      </button>
    </div>
  );
};

export default ProdButton;
