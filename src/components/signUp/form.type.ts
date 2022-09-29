export interface InputType {
  id: string;
  pwd: string;
  pwdCheck: string;
  buisness: string;
  phone: string;
}
export interface UserType extends InputType {
  brand: string;
}

export interface IsSignUpType {
  id: boolean;
  pwd: boolean;
  pwdCheck: boolean;
  brand: boolean;
  buisness: boolean;
  phone: boolean;
}
