export interface PropsType {
  children?: string;
  onClick?: () => void;
}
export interface SignUpType {
  type: string;
  value: string;
  text: string;
  children?: React.ReactNode;
  disabled: boolean;
}
