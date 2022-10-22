export interface List {
  id: number; //index id
  k_No: number;
  keyword: string; //키워드
  k_Level: number; //현재순위
  k_Cost: number;
  k_Click: number;
  clickCost: number;
  k_Status: boolean;
}
export interface AdList {
  cnt: number;
  keywordList: List[];
}

export interface Paginationtype {
  category: string;
  sort: string;
  page: number;
}
