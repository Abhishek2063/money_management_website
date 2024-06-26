import {
  ERROR_FACEBOOKLOGINCALLBACK,
  ERROR_GETLOGINUSERBYID,
  ERROR_GETUSERBYID,
  ERROR_GOOGLELOGIN,
  ERROR_GOOGLELOGINCALLBACK,
  ERROR_LOGIN,
  ERROR_LOGOUT,
  ERROR_REGISTRATION,
  ERROR_UPDATEUSERBYID,
  ERROR_VERIFYOTP,
  SUCCESS_FACEBOOKLOGINCALLBACK,
  SUCCESS_GETLOGINUSERBYID,
  SUCCESS_GETUSERBYID,
  SUCCESS_GOOGLELOGIN,
  SUCCESS_GOOGLELOGINCALLBACK,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  SUCCESS_REGISTRATION,
  SUCCESS_UPDATEUSERBYID,
  SUCCESS_VERIFYOTP,
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

    case SUCCESS_GOOGLELOGIN:
      const googleLoginData = action.data;
      return { ...state, googleLoginData };
    case ERROR_GOOGLELOGIN:
      const errorGoogleLoginData = action.data;
      return { ...state, googleLoginData: errorGoogleLoginData };

    case SUCCESS_GOOGLELOGINCALLBACK:
      const googleLoginCallbackData = action.data;
      return { ...state, googleLoginCallbackData };
    case ERROR_GOOGLELOGINCALLBACK:
      const errorGoogleLoginCallbackData = action.data;
      return {
        ...state,
        googleLoginCallbackData: errorGoogleLoginCallbackData,
      };

    case SUCCESS_FACEBOOKLOGINCALLBACK:
      const facebookLoginCallbackData = action.data;
      return { ...state, facebookLoginCallbackData };
    case ERROR_FACEBOOKLOGINCALLBACK:
      const errorfacebookLoginCallbackData = action.data;
      return {
        ...state,
        facebookLoginCallbackData: errorfacebookLoginCallbackData,
      };

    case SUCCESS_VERIFYOTP:
      const verifyOtpData = action.data;
      return { ...state, verifyOtpData };
    case ERROR_VERIFYOTP:
      const errorVerifyOtpData = action.data;
      return {
        ...state,
        verifyOtpData: errorVerifyOtpData,
      };

    default:
      return state;
  }
};
