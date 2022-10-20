//정규식 hook
import { IdCheck, PwdCheck, PhoneCheck } from "../../shared/regExp";
//default state data (id,pwd... )
import { initialValue } from "./initialValue";
//type
import { Action } from "./signUpForm.type";

export const useInputReducer = (state: typeof initialValue, action: Action) => {
  switch (action.type) {
    case "id":
      if (action.payload === "err") {
        return {
          ...state,
          [action.type]: {
            val: state.id.val,
            msg: "중복된 아이디입니다.",
            isCheck: false,
          },
        };
      } else {
        return IdCheck(action.payload)
          ? {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: "안전한 아이디 입니다.",
                isCheck: true,
              },
            }
          : {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: "8자리 이상 입력해주세요",
                isCheck: false,
              },
            };
      }

    case "pwd":
      return PwdCheck(action.payload)
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: "사용가능한 비밀번호 입니다.",
              isCheck: true,
            },
            pwdCheck: {
              msg: "",
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: "잘못된 비밀번호(영문,숫자,특수문자 포함(8~20자)",
              isCheck: false,
            },
            pwdCheck: {
              msg: "",
              isCheck: false,
            },
          };
    case "pCheck":
      return state.pwd.val === action.payload
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: "비밀번호 일치.",
              isCheck: true,
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: "비밀번호를 다시 확인해주세요.",
              isCheck: false,
            },
          };

    case "brand":
      return action.payload.length > 0
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              isCheck: true,
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              isCheck: false,
            },
          };

    case "buisness":
      if (action.payload === "err") {
        return {
          ...state,
          [action.type]: {
            val: state.buisness.val,
            msg: "중복된 사업자번호 입니다.",
            isCheck: false,
          },
        };
      } else {
        return action.payload.length > 0
          ? {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: "",
                isCheck: true,
              },
            }
          : {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: "사업자번호를 입력해주세요.",
                isCheck: false,
              },
            };
      }

    case "phone":
      if (action.payload === "err") {
        return {
          ...state,
          [action.type]: {
            val: state.phone.val,
            msg: "중복된 연락처입니다.",
            isCheck: false,
          },
        };
      } else {
        return PhoneCheck(action.payload)
          ? {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: "올바른 연락처 입니다.",
                isCheck: true,
              },
            }
          : {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: "연락처를 다시 확인해주세요.",
                isCheck: false,
              },
            };
      }
    case "reset":
      return initialValue;
    default:
      throw new Error(`${action.type}`);
  }
};
