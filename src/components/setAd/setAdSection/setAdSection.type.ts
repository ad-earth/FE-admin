export interface Paginationtype {
  category: string;
  sort: string;
  page: number;
}
export interface FilterDataType {
  p_Name: string;
  p_No: number | null;
}
interface List {
  id: number; //index id
  k_No: number;
  keyword: string; //키워드
  k_Level: number; //현재순위
  k_Cost: number;
  k_Click: number;
  clickCost: number;
  k_Status: boolean;
}
//res
export interface AdTableListType {
  cnt: number;
  keywordList: List[];
}
