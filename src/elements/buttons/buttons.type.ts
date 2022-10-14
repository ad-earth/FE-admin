export interface PropsType {
  children?: string;
  onClick?: () => void;
}

interface Default {
  text: string;
  children?: React.ReactNode;
}
export interface SignUpType extends Default {
  type: string;
  value: string;
  disabled: boolean;
}
export interface WithdrawalType extends Default {
  onClick: () => void;
}
export interface NotFoundType extends Default {
  type: string;
  onClick: () => void;
}
