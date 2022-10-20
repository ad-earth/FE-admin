// 로그인 클라이언트 유효성 검사

let validId = false;
let validPwd = false;

export const useLoginReg = (id: string, pwd: string) => {
  // 아이디 (5~10자),
  let regId = /^[a-zA-Z0-9]{5,10}$/;
  validId = regId.test(id);
  // 비밀번호 영문, 숫자, 특수문자 필수 포함 (8~20자)
  let regPwd =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  validPwd = regPwd.test(pwd);
  return validId && validPwd;
};
