export interface FormDataType {
  id: string;
  pwd: string;
  brand: string;
  buisness: string;
  phone: string;
}
interface State {
  val: string;
  msg?: string;
  isCheck: boolean;
}
export interface StateType {
  id: State;
  pwd: State;
  pCheck: State;
  brand: State;
  buisness: State;
  phone: State;
}

export type ActionType = { type: string; payload?: string; msg?: string };

//에러 타입
export interface ErrType {
  errorMessage: string;
}
