// getToalIncomeExpanse
export const GETTOTALINCOMEEXPANSE = "GETTOTALINCOMEEXPANSE";
export const getToalIncomeExpanse = (data) => ({
  type: GETTOTALINCOMEEXPANSE,
  data,
});
export const SUCCESS_GETTOTALINCOMEEXPANSE = "SUCCESS_GETTOTALINCOMEEXPANSE";
export const ERROR_GETTOTALINCOMEEXPANSE = "ERROR_GETTOTALINCOMEEXPANSE";
export const getToalIncomeExpanseResponse = (type, data) => ({ type, data });

// getExpenseByCategory
export const GETEXPANSEBYCATEGORY = "GETEXPANSEBYCATEGORY";
export const getExpenseByCategory = (data) => ({
  type: GETEXPANSEBYCATEGORY,
  data,
});
export const SUCCESS_GETEXPANSEBYCATEGORY = "SUCCESS_GETEXPANSEBYCATEGORY";
export const ERROR_GETEXPANSEBYCATEGORY = "ERROR_GETEXPANSEBYCATEGORY";
export const getExpenseByCategoryResponse = (type, data) => ({ type, data });

// getIncomeExpenseSummary
export const GETINCOMEEXPANSESUMMARY = "GETINCOMEEXPANSESUMMARY";
export const getIncomeExpenseSummary = (data) => ({
  type: GETINCOMEEXPANSESUMMARY,
  data,
});
export const SUCCESS_GETINCOMEEXPANSESUMMARY =
  "SUCCESS_GETINCOMEEXPANSESUMMARY";
export const ERROR_GETINCOMEEXPANSESUMMARY = "ERROR_GETINCOMEEXPANSESUMMARY";
export const getIncomeExpenseSummaryResponse = (type, data) => ({ type, data });

// getExpenseDays
export const GETEXPENSEDAYS = "GETEXPENSEDAYS";
export const getExpenseDays = (data) => ({ type: GETEXPENSEDAYS, data });
export const SUCCESS_GETEXPENSEDAYS = "SUCCESS_GETEXPENSEDAYS";
export const ERROR_GETEXPENSEDAYS = "ERROR_GETEXPENSEDAYS";
export const getExpenseDaysResponse = (type, data) => ({ type, data });
