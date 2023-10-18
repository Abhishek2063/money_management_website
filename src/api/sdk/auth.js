import { request } from "../request/axios.request";
import { GETLOGINUSERBYID, GETUSERBYID, LOGIN, REGISTRATION, UPDATEUSERBYID } from "../routing/route";

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