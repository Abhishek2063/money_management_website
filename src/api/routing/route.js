import { API_URL } from "../../app/common/config";

const BASE_URL = API_URL;
const URL = (uri) => `${BASE_URL}${uri}`;
// const URL = (uri) => 'http://localhost:3000/auth/api/login';

// const URL = 'http://localhost:8000/api/login';

/***** Auth Routes*********/
export const REGISTRATION = URL("/users/create");
export const GETUSERBYID = URL("/users/:id");
export const UPDATEUSERBYID = URL("/users/:id");

export const LOGIN = URL("/auth/login");
export const GETLOGINUSERBYID = URL("/auth/get/:userId");
export const LOGOUT = URL("/auth/logout/");
export const GOOGLE_LOGIN = URL("/auth/google/");
export const GOOGLE_LOGIN_CALLBACK = URL("/auth/google/callback/success");
export const FACEBOOK_LOGIN_CALLBACK = URL("/auth/facebook/callback/success");
export const VERIFY_OTP = URL("/auth/verify-otp");




/***** Category Routes*********/
export const CATEGORYCREATE = URL("/categories/create");
export const CATEGORYGETBYUSERID = URL("/categories/list");
export const CATEGORYGETBYUSERIDCATEGORYID = URL(
  "/categories/get"
);
export const CATEGORYGETBYUSERIDCATEGORYTYPE = URL(
  "/categories/list"
);
export const CATEGORYUPDATEBYUSERIDCATEGORYID = URL(
  "/categories/update"
);
export const CATEGORYDELETEBYUSERIDCATEGORYID = URL(
  "/categories/delete"
);

/***** Income Routes*********/
export const INCOMESTORE = URL("/income/create");
export const INCOMEGETBYUSERID = URL("/income/list");
export const INCOMEUPDATEBYUSERIDINCOMEID = URL(
  "/income/update"
);
export const INCOMEDELETEBYUSERIDINCOMEID = URL(
  "/income/delete"
);

/***** Expanse Routes*********/
export const EXPANSESTORE = URL("/expanse/create");
export const EXPANSEGETBYUSERID = URL("/expanse/list");
export const EXPANSEUPDATEBYUSERIDEXPANSEID = URL(
  "/expanse/update"
);
export const EXPANSEDELETEBYUSERIDINCOMEID = URL(
  "/expanse/delete"
);
