import {
  dayjs,
  getExpenseByCategory,
  getExpenseDays,
  getIncomeExpenseSummary,
  getToalIncomeExpanse,
  message,
} from "./index";
export const expanseDaysWiseMonthlyOptions = {
  hAxis: {
    title: "Day",
  },
  vAxis: {
    title: "Expense Amount",
  },
  series: {
    1: { curveType: "function" },
  },
};

export const totalIncomeTotalExpanseMonthwiseYearWiseOptions = {
  chart: {
    title: "Total Income and Expenditure Over Months and Years",
    subtitle: "Monthly and Yearly Breakdown",
  },
};

export const totalIncomeExpanseOption = {
  title: "Total Income vs Total Expenditure",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export const totalIncomeExpanseCategoryWiseOption = {
  title: "Total Income vs Total Expenditure by Category",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export const handleTotalIncomeExpanseCategoryWiseStartDateChange = (
  val,
  totalIncomeExpanseCategoryWiseState,
  setTotalIncomeExpanseCategoryWiseState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setTotalIncomeExpanseCategoryWiseState({
      ...totalIncomeExpanseCategoryWiseState,
      startDate: pickUp,
    });
  } else {
    setTotalIncomeExpanseCategoryWiseState({
      ...totalIncomeExpanseCategoryWiseState,
      startDate: "",
    });
  }
};

export const handleTotalIncomeExpanseCategoryWiseEndDateChange = (
  val,
  totalIncomeExpanseCategoryWiseState,
  setTotalIncomeExpanseCategoryWiseState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setTotalIncomeExpanseCategoryWiseState({
      ...totalIncomeExpanseCategoryWiseState,
      endDate: pickUp,
    });
  } else {
    setTotalIncomeExpanseCategoryWiseState({
      ...totalIncomeExpanseCategoryWiseState,
      endDate: "",
    });
  }
};

export const handleTotalIncomeExpanseStateStartDateChange = (
  val,
  totalIncomeExpanseState,
  setTotalIncomeExpanseState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setTotalIncomeExpanseState({
      ...totalIncomeExpanseState,
      startDate: pickUp,
    });
  } else {
    setTotalIncomeExpanseState({
      ...totalIncomeExpanseState,
      startDate: "",
    });
  }
};

export const handleTotalIncomeExpanseStateEndDateChange = (
  val,
  totalIncomeExpanseState,
  setTotalIncomeExpanseState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setTotalIncomeExpanseState({
      ...totalIncomeExpanseState,
      endDate: pickUp,
    });
  } else {
    setTotalIncomeExpanseState({
      ...totalIncomeExpanseState,
      endDate: "",
    });
  }
};

export const handleTypeSelectChange = (
  value,
  totalIncomeTotalExpanseMonthwiseYearWiseState,
  setTotalIncomeTotalExpanseMonthwiseYearWiseState
) => {
  setTotalIncomeTotalExpanseMonthwiseYearWiseState({
    ...totalIncomeTotalExpanseMonthwiseYearWiseState,
    type: value,
  });
};

export const handleMonthDaySelectChange = (
  value,
  expanseDaysWiseMonthlyState,
  setExpanseDaysWiseMonthlyState
) => {
  setExpanseDaysWiseMonthlyState({
    ...expanseDaysWiseMonthlyState,
    month: value,
  });
};

export const handleTotalExpanseIncomeSubmit = (
  dispatch,
  totalIncomeExpanseState,
  setLoader,
  userData
) => {
  if (totalIncomeExpanseState.startDate && totalIncomeExpanseState.endDate) {
    const data = {
      user_id: userData.userId,
      startDate: totalIncomeExpanseState.startDate,
      endDate: totalIncomeExpanseState.endDate,
    };
    dispatch(getToalIncomeExpanse(data));
    setLoader(true);
  } else {
    message.error("Select the start date and end date both.");
  }
};

export const handleTotalExpanseIncomeCategorySubmit = (
  dispatch,
  totalIncomeExpanseCategoryWiseState,
  setLoader,
  userData
) => {
  if (
    totalIncomeExpanseCategoryWiseState.startDate &&
    totalIncomeExpanseCategoryWiseState.endDate
  ) {
    const data = {
      user_id: userData.userId,
      startDate: totalIncomeExpanseCategoryWiseState.startDate,
      endDate: totalIncomeExpanseCategoryWiseState.endDate,
    };
    dispatch(getExpenseByCategory(data));
    setLoader(true);
  } else {
    message.error("Select the start date and end date both.");
  }
};

export const handletotalIncomeTotalExpanseMonthwiseYearWiseStateSubmit = (
  dispatch,
  totalIncomeTotalExpanseMonthwiseYearWiseState,
  setLoader,
  userData
) => {
  if (totalIncomeTotalExpanseMonthwiseYearWiseState.type) {
    const data = {
      user_id: userData.userId,
      type: totalIncomeTotalExpanseMonthwiseYearWiseState.type,
    };
    dispatch(getIncomeExpenseSummary(data));
    setLoader(true);
  } else {
    message.error("Select the type.");
  }
};

export const handleexpanseDaysWiseMonthlyStateSubmit = (
  dispatch,
  expanseDaysWiseMonthlyState,
  setLoader,
  userData
) => {
  if (expanseDaysWiseMonthlyState.month) {
    const data = {
      user_id: userData.userId,
      month: expanseDaysWiseMonthlyState.month,
    };
    dispatch(getExpenseDays(data));
    setLoader(true);
  } else {
    message.error("Select the start date and end date both.");
  }
};
