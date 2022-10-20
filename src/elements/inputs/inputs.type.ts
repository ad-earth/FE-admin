export interface PropsType {
  placeholder: string;
  type?: string;
  value?: string;
  setInput?: (val: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
