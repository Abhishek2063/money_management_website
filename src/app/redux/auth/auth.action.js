// Registration
export const REGISTRATION = "REGISTRATION";
export const registration = (data) => ({ type: REGISTRATION, data });
export const SUCCESS_REGISTRATION = "SUCCESS_REGISTRATION";
export const ERROR_REGISTRATION = "ERROR_REGISTRATION";
export const registrationResponse = (type, data) => ({ type, data });

// LOGIN
export const LOGIN = "LOGIN";
export const login = (data) => ({ type: LOGIN, data });
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const loginResponse = (type, data) => ({ type, data });

// userGetById
export const GETUSERBYID = "GETUSERBYID";
export const userGetById = (data) => ({ type: GETUSERBYID, data });
export const SUCCESS_GETUSERBYID = "SUCCESS_GETUSERBYID";
export const ERROR_GETUSERBYID = "ERROR_GETUSERBYID";
export const userGetByIdResponse = (type, data) => ({ type, data });

// updateUserById
export const UPDATEUSERBYID = "UPDATEUSERBYID";
export const updateUserById = (data) => ({ type: UPDATEUSERBYID, data });
export const SUCCESS_UPDATEUSERBYID = "SUCCESS_UPDATEUSERBYID";
export const ERROR_UPDATEUSERBYID = "ERROR_UPDATEUSERBYID";
export const updateUserByIdResponse = (type, data) => ({ type, data });

// getLoginUserById
export const GETLOGINUSERBYID = "GETLOGINUSERBYID";
export const getLoginUserById = (data) => ({ type: GETLOGINUSERBYID, data });
export const SUCCESS_GETLOGINUSERBYID = "SUCCESS_GETLOGINUSERBYID";
export const ERROR_GETLOGINUSERBYID = "ERROR_GETLOGINUSERBYID";
export const getLoginUserByIdResponse = (type, data) => ({ type, data });

// LOGOUT
export const LOGOUT = "LOGOUT";
export const logout = (data) => ({ type: LOGOUT, data });
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";
export const ERROR_LOGOUT = "ERROR_LOGOUT";
export const logoutResponse = (type, data) => ({ type, data });

// GOOGLELOGIN
export const GOOGLELOGIN = "GOOGLELOGIN";
export const googleLogin = (data) => ({ type: GOOGLELOGIN, data });
export const SUCCESS_GOOGLELOGIN = "SUCCESS_GOOGLELOGIN";
export const ERROR_GOOGLELOGIN = "ERROR_GOOGLELOGIN";
export const googleLoginResponse = (type, data) => ({ type, data });

// GOOGLELOGINCALLBACK
export const GOOGLELOGINCALLBACK = "GOOGLELOGINCALLBACK";
export const googleLoginCallback = (data) => ({
  type: GOOGLELOGINCALLBACK,
  data,
});
export const SUCCESS_GOOGLELOGINCALLBACK = "SUCCESS_GOOGLELOGINCALLBACK";
export const ERROR_GOOGLELOGINCALLBACK = "ERROR_GOOGLELOGINCALLBACK";
export const googleLoginCallbackResponse = (type, data) => ({ type, data });

// FACEBOOKLOGINCALLBACK
export const FACEBOOKLOGINCALLBACK = "FACEBOOKLOGINCALLBACK";
export const facebookLoginCallback = (data) => ({
  type: FACEBOOKLOGINCALLBACK,
  data,
});
export const SUCCESS_FACEBOOKLOGINCALLBACK = "SUCCESS_FACEBOOKLOGINCALLBACK";
export const ERROR_FACEBOOKLOGINCALLBACK = "ERROR_FACEBOOKLOGINCALLBACK";
export const facebookLoginCallbackResponse = (type, data) => ({ type, data });

// VERIFYOTP
export const VERIFYOTP = "VERIFYOTP";
export const verifyOtp = (data) => ({ type: VERIFYOTP, data });
export const SUCCESS_VERIFYOTP = "SUCCESS_VERIFYOTP";
export const ERROR_VERIFYOTP = "ERROR_VERIFYOTP";
export const verifyOtpResponse = (type, data) => ({ type, data });
