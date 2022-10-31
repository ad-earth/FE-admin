import { atom, selector } from "recoil";

type OptList = {
  id: number;
  colorCheck: boolean;
  optCheck: boolean;
  color: string | null;
  colorCode: string | null;
  option: string | null;
  optionPrice: number | null;
  optionCnt: number | null;
};

export const optListState = atom<OptList[]>({
  key: "OptListState",
  default: [
    {
      id: 1,
      colorCheck: false,
      optCheck: true,
      color: null,
      colorCode: "dkdjdjakdjjflad",
      option: "dkssudgktpdy",
      optionPrice: null,
      optionCnt: null,
    },
    {
      id: 2,
      colorCheck: true,
      optCheck: false,
      color: "akdjlfja",
      colorCode: null,
      option: null,
      optionPrice: 10,
      optionCnt: 1000,
    },
  ],
});

//옵션 수정
export const optList = selector({
  key: "optList",
  get: ({ get }) => {
    const option = get(optListState);
    return option.map((item) => ({
      color: item.color,
      colorCode: item.colorCode,
      option: item.option,
      optionPrice: item.optionPrice,
      optionCnt: item.optionCnt,
    }));
  },
});
