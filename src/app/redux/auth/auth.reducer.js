import {
  ERROR_GETLOGINUSERBYID,
  ERROR_GETUSERBYID,
  ERROR_LOGIN,
  ERROR_LOGOUT,
  ERROR_REGISTRATION,
  ERROR_UPDATEUSERBYID,
  SUCCESS_GETLOGINUSERBYID,
  SUCCESS_GETUSERBYID,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  SUCCESS_REGISTRATION,
  SUCCESS_UPDATEUSERBYID,
} from "./auth.action";
import { DEFAULT_STATE } from "./auth.state";

export const authReducer = (
  state = DEFAULT_STATE,
  action = {
    type: {},
    data: {},
  }
) => {
  switch (action.type) {
    case SUCCESS_REGISTRATION:
      const registerData = action.data;
      return { ...state, registerData };
    case ERROR_REGISTRATION:
      const errorRegisterData = action.data;
      return { ...state, registerData: errorRegisterData };

    case SUCCESS_LOGIN:
      const loginData = action.data;
      return { ...state, loginData };
    case ERROR_LOGIN:
      const errorLoginData = action.data;
      return { ...state, loginData: errorLoginData };

    case SUCCESS_GETUSERBYID:
      const userGetByIdData = action.data;
      return { ...state, userGetByIdData };
    case ERROR_GETUSERBYID:
      const errorUserGetByIdData = action.data;
      return { ...state, userGetByIdData: errorUserGetByIdData };

    case SUCCESS_UPDATEUSERBYID:
      const updateUserByIdData = action.data;
      return { ...state, updateUserByIdData };
    case ERROR_UPDATEUSERBYID:
      const errorUpdateUserByIdData = action.data;
      return { ...state, updateUserByIdData: errorUpdateUserByIdData };

    case SUCCESS_GETLOGINUSERBYID:
      const getLoginUserByIdData = action.data;
      return { ...state, getLoginUserByIdData };
    case ERROR_GETLOGINUSERBYID:
      const errorGetLoginUserByIdData = action.data;
      return { ...state, getLoginUserByIdData: errorGetLoginUserByIdData };

    case SUCCESS_LOGOUT:
      const logoutUserData = action.data;
      return { ...state, logoutUserData };
    case ERROR_LOGOUT:
      const errorLogoutUserData = action.data;
      return { ...state, logoutUserData: errorLogoutUserData };

    default:
      return state;
  }
};
