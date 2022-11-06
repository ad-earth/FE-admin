import { atom } from "recoil";

let now = new Date();
const today = now.toISOString().substring(0, 10);
let oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
const lastMonth = oneMonthAgo.toISOString().substring(0, 10);

export const selectedStartDateState = atom<string>({
  key: "selectedStartDateState",
  default: lastMonth,
});

export const selectedEndDateState = atom<string>({
  key: "selectedEndDateState",
  default: today,
});

export const selectedProductState = atom<string>({
  key: "selectedProductState",
  default: "전체",
});

export const selectedStatusState = atom<string>({
  key: "selectedStatusState",
  default: "전체",
});

export const selectedCategoryState = atom<string>({
  key: "selectedCategoryState",
  default: "전체",
});

export const selectedProductNumberState = atom<string>({
  key: "selectedProductNumberState",
  default: null,
});
