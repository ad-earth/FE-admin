export interface InitalStateType {
  pNo?: number | null;
  pName?: string | null;
  keyword?: string | null;
  level?: number | undefined;
  levelCost?: number;
  cost?: number | null;
  adStatus?: boolean;
}
export interface PostAdType {
  title: string;
}
export interface ProdAdType {
  pNo: number;
  keyword: string;
  level: number;
  cost: number;
  adStatus: boolean;
}
//err
export interface ErrType {
  errorMessage: string;
}
//res 예상금액
export interface LevelCost {
  levelCost: number;
}
