// 로그인 유효성 검사

let validId = false;
let validPwd = false;

export const useLoginReg = (id: string, pwd: string) => {
  let regId = /^[a-zA-Z0-9]{5,10}$/;
  validId = regId.test(id);
  let regPwd =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  validPwd = regPwd.test(pwd);
  return validId && validPwd;
};
