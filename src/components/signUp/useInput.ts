import { useReducer } from "react";
import { IdCheck, PwdCheck, PhoneCheck } from "../../shared/regExp";
import { Action } from "./signUpForm.type";

const useInput = (): any => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };
  return [state, onChange];
};
export default useInput;

const initialValue = {
  id: {
    val: "",
    msg: "",
    isCheck: false,
  },
  pwd: {
    val: "",
    msg: "",
    isCheck: false,
  },
  pCheck: {
    val: "",
    msg: "",
    isCheck: false,
  },
  brand: {
    val: "",
    isCheck: false,
  },
  buisness: {
    val: "",
    msg: "",
    isCheck: false,
  },
  phone: {
    val: "",
    msg: "",
    isCheck: false,
  },
};

const reducer = (state: typeof initialValue, action: Action) => {
  switch (action.type) {
    case "id":
      return IdCheck(action.payload)
        ? {
            ...state,
            id: {
              val: action.payload,
              msg: "안전한 아이디 입니다.",
              isCheck: true,
            },
          }
        : {
            ...state,
            id: {
              val: action.payload,
              msg: "8자리 이상 입력해주세요",
              isCheck: false,
            },
          };
    case "pwd":
      return PwdCheck(action.payload)
        ? {
            ...state,
            pwd: {
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
            pwd: {
              val: action.payload,
              msg: "잘못된 비밀번호(영문,숫자,특수문자 포함(8~20자)",
              isCheck: false,
            },
            pwdCheck: {
              msg: "",
              isCheck: false,
            },
          };
    case "pwdCheck":
      return state.pwd.val === action.payload
        ? {
            ...state,
            pCheck: {
              val: action.payload,
              msg: "비밀번호 일치.",
              isCheck: true,
            },
          }
        : {
            ...state,
            pCheck: {
              val: action.payload,
              msg: "비밀번호를 다시 확인해주세요.",
              isCheck: false,
            },
          };

    case "brand":
      return action.payload.length > 0
        ? {
            ...state,
            brand: {
              val: action.payload,
              isCheck: true,
            },
          }
        : {
            ...state,
            brand: {
              val: action.payload,
              isCheck: false,
            },
          };

    case "buisness":
      return action.payload.length > 0
        ? {
            ...state,
            buisness: {
              val: action.payload,
              msg: "",
              isCheck: true,
            },
          }
        : {
            ...state,
            buisness: {
              val: action.payload,
              msg: "사업자번호를 입력해주세요.",
              isCheck: false,
            },
          };
    case "phone":
      return PhoneCheck(action.payload)
        ? {
            ...state,
            phone: {
              val: action.payload,
              msg: "올바른 연락처 입니다.",
              isCheck: true,
            },
          }
        : {
            ...state,
            phone: {
              val: action.payload,
              msg: "연락처를 다시 확인해주세요.",
              isCheck: false,
            },
          };
    case "reset":
      return initialValue;
    default:
      throw new Error(`${state}`);
  }
};
