import {
  ERROR_GETEXPANSEBYCATEGORY,
  ERROR_GETEXPENSEDAYS,
  ERROR_GETINCOMEEXPANSESUMMARY,
  ERROR_GETTOTALINCOMEEXPANSE,
  SUCCESS_GETEXPANSEBYCATEGORY,
  SUCCESS_GETEXPENSEDAYS,
  SUCCESS_GETINCOMEEXPANSESUMMARY,
  SUCCESS_GETTOTALINCOMEEXPANSE,
} from "./dashboard.action";
import { DEFAULT_STATE } from "./dashboard.state";

export const dashboardReducer = (
  state = DEFAULT_STATE,
  action = {
    type: {},
    data: {},
  }
) => {
  switch (action.type) {
    case SUCCESS_GETTOTALINCOMEEXPANSE:
      const getToalIncomeExpanseData = action.data;
      return { ...state, getToalIncomeExpanseData };
    case ERROR_GETTOTALINCOMEEXPANSE:
      const errorgetToalIncomeExpanseData = action.data;
      return {
        ...state,
        getToalIncomeExpanseData: errorgetToalIncomeExpanseData,
      };

    case SUCCESS_GETEXPANSEBYCATEGORY:
      const getExpenseByCategoryData = action.data;
      return { ...state, getExpenseByCategoryData };
    case ERROR_GETEXPANSEBYCATEGORY:
      const errorgetExpenseByCategoryData = action.data;
      return {
        ...state,
        getExpenseByCategoryData: errorgetExpenseByCategoryData,
      };

    case SUCCESS_GETINCOMEEXPANSESUMMARY:
      const getIncomeExpenseSummaryData = action.data;
      return { ...state, getIncomeExpenseSummaryData };
    case ERROR_GETINCOMEEXPANSESUMMARY:
      const errorgetIncomeExpenseSummaryData = action.data;
      return {
        ...state,
        getIncomeExpenseSummaryData: errorgetIncomeExpenseSummaryData,
      };

    case SUCCESS_GETEXPENSEDAYS:
      const getExpenseDaysData = action.data;
      return { ...state, getExpenseDaysData };
    case ERROR_GETEXPENSEDAYS:
      const errorgetExpenseDaysData = action.data;
      return { ...state, getExpenseDaysData: errorgetExpenseDaysData };

    default:
      return state;
  }
};
