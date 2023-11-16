import { all } from "redux-saga/effects";
import {
  facebookLoginCallbackWatcher,
  getLoginUserByIdWatcher,
  googleLoginCallbackWatcher,
  googleLoginWatcher,
  loginWatcher,
  logoutUserWatcher,
  registrationWatcher,
  updateUserByIdWatcher,
  userGetByIdWatcher,
  verifyOtpWatcher,
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
import {
  budgetDeleteByUserIdBudgetIdWatcher,
  budgetGetByUserIdWatcher,
  budgetStoreWatcher,
  budgetUpdateByUserIdBudgetIdWatcher,
} from "../redux/budget/budget.saga";

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
    googleLoginWatcher(),
    googleLoginCallbackWatcher(),
    facebookLoginCallbackWatcher(),
    verifyOtpWatcher(),
    budgetStoreWatcher(),
    budgetGetByUserIdWatcher(),
    budgetUpdateByUserIdBudgetIdWatcher(),
    budgetDeleteByUserIdBudgetIdWatcher(),
  ]);
}
