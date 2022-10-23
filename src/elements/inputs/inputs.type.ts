export interface PropsType {
  placeholder: string;
  disabled?: boolean;
  type?: string;
  value?: string | number;
  ref?: any;
  defaultValue?: string;
  name?: string;
  setInput?: (val: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
