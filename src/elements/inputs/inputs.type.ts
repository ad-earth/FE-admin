export interface PropsType {
  placeholder: string;
  disabled?: boolean;
  type?: string;
  value?: string | number;
  ref?: any;
  defaultValue?: string;
  name?: string;
  setInput?: (val: string) => void;
  setInputNum?: (val: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onKeyUp?: (e: React.KeyboardEvent) => void;
}
