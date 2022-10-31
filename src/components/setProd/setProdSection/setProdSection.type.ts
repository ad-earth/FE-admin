export interface List {
  id: number;
  p_Category: string;
  p_Name: string;
  p_No: number;
  p_Status: boolean;
}
export interface Paginationtype {
  category: string;
  page: number;
}
export interface ResType {
  cnt: number;
  list: List[];
}
