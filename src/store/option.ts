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
      optCheck: false,
      color: null,
      colorCode: null,
      option: null,
      optionPrice: null,
      optionCnt: null,
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
