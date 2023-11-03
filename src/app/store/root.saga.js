import { all } from "redux-saga/effects";
import {
  getLoginUserByIdWatcher,
  loginWatcher,
  logoutUserWatcher,
  registrationWatcher,
  updateUserByIdWatcher,
  userGetByIdWatcher,
} from "../redux/auth/auth.saga";
import {
  categoryCreateWatcher,
  categoryDeleteByUserIdCategoryIdWatcher,
  categoryGetByUserIdCategoryIdWatcher,
  categoryGetByUserIdCategoryTypeWatcher,
  categoryGetByUserIdWatcher,
  categoryUpdateByUserIdCategoryIdWatcher,
} from "../redux/category/category.saga";
import {
  expanseDeleteByUserIdIncomeIdWatcher,
  expanseGetByUserIdWatcher,
  expanseStoreWatcher,
  expanseUpdateByUserIdIncomeIdWatcher,
} from "../redux/expanseDetails/expanse.saga";
import {
  incomeDeleteByUserIdIncomeIdWatcher,
  incomeGetByUserIdWatcher,
  incomeStoreWatcher,
  incomeUpdateByUserIdIncomeIdWatcher,
} from "../redux/incomeDetails/income.saga";

export function* rootSaga() {
  yield all([
    registrationWatcher(),
    loginWatcher(),
    userGetByIdWatcher(),
    updateUserByIdWatcher(),
    getLoginUserByIdWatcher(),
    categoryGetByUserIdWatcher(),
    categoryGetByUserIdCategoryIdWatcher(),
    categoryGetByUserIdCategoryTypeWatcher(),
    categoryUpdateByUserIdCategoryIdWatcher(),
    categoryDeleteByUserIdCategoryIdWatcher(),
    expanseGetByUserIdWatcher(),
    expanseUpdateByUserIdIncomeIdWatcher(),
    expanseDeleteByUserIdIncomeIdWatcher(),
    incomeStoreWatcher(),
    incomeGetByUserIdWatcher(),
    incomeUpdateByUserIdIncomeIdWatcher(),
    incomeDeleteByUserIdIncomeIdWatcher(),
    categoryCreateWatcher(),
    expanseStoreWatcher(),
    logoutUserWatcher(),
  ]);
}
