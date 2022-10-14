import { atom, selector } from "recoil";

interface ProdType {
  isProd: boolean;
  prodNumber: number;
}

//상품 등록,수정
export const prod = atom<ProdType>({
  key: "prod",
  default: {
    isProd: false, //상품 수정 상태
    prodNumber: 0, //상품 정보
  },
});

