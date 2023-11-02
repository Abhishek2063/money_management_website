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
