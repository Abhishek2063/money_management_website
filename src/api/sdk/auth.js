import { request } from "../request/axios.request";
import {
  FACEBOOK_LOGIN_CALLBACK,
  GETLOGINUSERBYID,
  GETUSERBYID,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_CALLBACK,
  LOGIN,
  LOGOUT,
  REGISTRATION,
  UPDATEUSERBYID,
} from "../routing/route";

// registration api
export async function registrationApi(data) {
  let userData = data.data;
  return request({
    url: REGISTRATION,
    method: "post",
    data: userData,
  });
}

// login api
export async function loginApi(data) {
  let userData = data.data;
  return request({
    url: LOGIN,
    method: "post",
    data: userData,
  });
}

// userGetById api
export async function userGetByIdApi(data) {
  let userData = data.data;
  return request({
    url: GETUSERBYID,
    method: "get",
    data: userData,
  });
}

// updateUserById api
export async function updateUserByIdApi(data) {
  let userData = data.data;
  return request({
    url: UPDATEUSERBYID,
    method: "put",
    data: userData,
  });
}

// getLoginUserById api
export async function getLoginUserByIdApi(data) {
  let userData = data.data;
  return request({
    url: GETLOGINUSERBYID,
    method: "get",
    data: userData,
  });
}

// logout api
export async function logoutApi(data) {
  let userData = data.data;
  let url = `${LOGOUT}${userData.userId}`;
  return request({
    url: url,
    method: "post",
  });
}

// googleLogin api
export async function googleLoginApi(data) {
  let userData = data.data;
  return request({
    url: GOOGLE_LOGIN,
    method: "get",
    data: userData,
  });
}
// googleLoginCallback api
export async function googleLoginCallbackApi(data) {
  let userData = data.data;
  return request({
    url: GOOGLE_LOGIN_CALLBACK,
    method: "get",
    data: userData,
    withCredentials: true
  });
}

// facebookLoginCallback api
export async function facebookLoginCallbackApi(data) {
  let userData = data.data;
  return request({
    url: FACEBOOK_LOGIN_CALLBACK,
    method: "get",
    data: userData,
    withCredentials: true
  });
}
