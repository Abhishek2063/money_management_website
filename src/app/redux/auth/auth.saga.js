import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
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
  FACEBOOKLOGINCALLBACK,
  GETLOGINUSERBYID,
  GETUSERBYID,
  GOOGLELOGIN,
  GOOGLELOGINCALLBACK,
  LOGIN,
  LOGOUT,
  REGISTRATION,
  SUCCESS_FACEBOOKLOGINCALLBACK,
  SUCCESS_GETLOGINUSERBYID,
  SUCCESS_GETUSERBYID,
  SUCCESS_GOOGLELOGIN,
  SUCCESS_GOOGLELOGINCALLBACK,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  SUCCESS_REGISTRATION,
  SUCCESS_UPDATEUSERBYID,
  UPDATEUSERBYID,
  facebookLoginCallbackResponse,
  getLoginUserByIdResponse,
  googleLoginCallbackResponse,
  googleLoginResponse,
  loginResponse,
  logoutResponse,
  registrationResponse,
  updateUserByIdResponse,
  userGetByIdResponse,
} from "./auth.action";
import {
  facebookLoginCallbackApi,
  getLoginUserByIdApi,
  googleLoginApi,
  googleLoginCallbackApi,
  loginApi,
  logoutApi,
  registrationApi,
  updateUserByIdApi,
  userGetByIdApi,
} from "../../../api/sdk/auth";

// Registration
function* registrationRequest(data) {
  let getData = yield registrationApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(registrationResponse(SUCCESS_REGISTRATION, getData.data));
  } else {
    yield put(registrationResponse(ERROR_REGISTRATION, getData.data));
  }
}
export function* registrationWatcher() {
  yield takeLatest(REGISTRATION, registrationRequest);
}

// login
function* loginRequest(data) {
  let getData = yield loginApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(loginResponse(SUCCESS_LOGIN, getData.data));
  } else {
    yield put(loginResponse(ERROR_LOGIN, getData.data));
  }
}
export function* loginWatcher() {
  yield takeLatest(LOGIN, loginRequest);
}

// userGetById
function* userGetByIdRequest(data) {
  let getData = yield userGetByIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(userGetByIdResponse(SUCCESS_GETUSERBYID, getData.data));
  } else {
    yield put(userGetByIdResponse(ERROR_GETUSERBYID, getData.data));
  }
}
export function* userGetByIdWatcher() {
  yield takeLatest(GETUSERBYID, userGetByIdRequest);
}

// updateUserById
function* updateUserByIdRequest(data) {
  let getData = yield updateUserByIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(updateUserByIdResponse(SUCCESS_UPDATEUSERBYID, getData.data));
  } else {
    yield put(updateUserByIdResponse(ERROR_UPDATEUSERBYID, getData.data));
  }
}
export function* updateUserByIdWatcher() {
  yield takeLatest(UPDATEUSERBYID, updateUserByIdRequest);
}

// getLoginUserById
function* getLoginUserByIdRequest(data) {
  let getData = yield getLoginUserByIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(getLoginUserByIdResponse(SUCCESS_GETLOGINUSERBYID, getData.data));
  } else {
    yield put(getLoginUserByIdResponse(ERROR_GETLOGINUSERBYID, getData.data));
  }
}
export function* getLoginUserByIdWatcher() {
  yield takeLatest(GETLOGINUSERBYID, getLoginUserByIdRequest);
}

// logoutUser
function* logoutUserRequest(data) {
  let getData = yield logoutApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(logoutResponse(SUCCESS_LOGOUT, getData.data));
  } else {
    yield put(logoutResponse(ERROR_LOGOUT, getData.data));
  }
}
export function* logoutUserWatcher() {
  yield takeLatest(LOGOUT, logoutUserRequest);
}

// googleLogin
function* googleLoginRequest(data) {
  let getData = yield googleLoginApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(googleLoginResponse(SUCCESS_GOOGLELOGIN, getData.data));
  } else {
    yield put(googleLoginResponse(ERROR_GOOGLELOGIN, getData.data));
  }
}
export function* googleLoginWatcher() {
  yield takeLatest(GOOGLELOGIN, googleLoginRequest);
}

// googleLoginCallback
function* googleLoginCallbackRequest(data) {
  let getData = yield googleLoginCallbackApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      googleLoginCallbackResponse(SUCCESS_GOOGLELOGINCALLBACK, getData.data)
    );
  } else {
    yield put(
      googleLoginCallbackResponse(ERROR_GOOGLELOGINCALLBACK, getData.data)
    );
  }
}
export function* googleLoginCallbackWatcher() {
  yield takeLatest(GOOGLELOGINCALLBACK, googleLoginCallbackRequest);
}

// facebookLoginCallback
function* facebookLoginCallbackRequest(data) {
  let getData = yield facebookLoginCallbackApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      facebookLoginCallbackResponse(SUCCESS_FACEBOOKLOGINCALLBACK, getData.data)
    );
  } else {
    yield put(
      facebookLoginCallbackResponse(ERROR_FACEBOOKLOGINCALLBACK, getData.data)
    );
  }
}
export function* facebookLoginCallbackWatcher() {
  yield takeLatest(FACEBOOKLOGINCALLBACK, facebookLoginCallbackRequest);
}
