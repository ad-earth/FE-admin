export interface PropsType {
  placeholder: string;
  type?: string;
  value?: string;
  name?: string;
  setInput?: (val: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
