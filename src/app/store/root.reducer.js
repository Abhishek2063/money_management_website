import { combineReducers } from "redux";
import { categoryReducer } from "../redux/category/category.reducer";
import { expanseReducer } from "../redux/expanseDetails/expanse.reducer";
import { incomeReducer } from "../redux/incomeDetails/income.reducer";
import { authReducer } from "../redux/auth/auth.reducer";
export const appReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  expanse: expanseReducer,
  income: incomeReducer,
});
export const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
