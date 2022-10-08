//-- 아이디 정규식 --
export const IdCheck = (id: string) => {
  let reg = /^[a-zA-Z0-9]{5,10}$/;
  return reg.test(id);
};

//-- 비밀번호 정규식 --
export const PwdCheck = (pwd: string) => {
  let reg =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  return reg.test(pwd);
};

//-- 연락처 정규식 --
export const PhoneCheck = (phone: string) => {
  let reg = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
  return reg.test(phone);
};
