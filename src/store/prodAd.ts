import { atom, selector } from "recoil";

interface ProdAdType {
  pNo?: number | null;
  pName?: string | null;
  keyword?: string | null;
  level?: number | null;
  cost?: number;
  adStatus?: boolean;
}

export const prodAdSeletedState = atom<ProdAdType>({
  key: "prodAdSeletedState",
  default: {
    pNo: null,
    pName: null,
  },
});
export const prodAdState = atom<ProdAdType>({
  key: "prodAdState",
  default: {
    keyword: null,
    level: null,
    cost: 0,
    adStatus: true,
  },
});

//수정
export const prodAd = selector({
  key: "prodAd",
  get: ({ get }) => {
    const seleted = get(prodAdSeletedState);
    const state = get(prodAdState);
    return { seleted, state };
  },
});
