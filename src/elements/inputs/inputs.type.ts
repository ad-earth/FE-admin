export interface PropsType {
  placeholder: string;
  type?: string;
  value?: string | number;
  name?: string;
  setInput?: (val: string) => void;
  setInputNum?: (val: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}
