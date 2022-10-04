export interface FormData {
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
  onChange: () => void;
}

export type Action = { type: string; payload: string };
