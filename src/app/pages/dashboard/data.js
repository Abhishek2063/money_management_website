export const totalIncomeExpanseData = [
  ["Expanse", "Amount (in Rupee)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
];

export const totalIncomeExpanseOption = {
  title: "Total Income Over Total Expanse",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export const BarChartdata = [
  ["Year", "Income", "Expenses"],
  ["2014", 400, 200],
  ["2015", 460, 250],
  ["2016", 1120, 300],
  ["2017", 540, 350],
];

export const barChartOptions = {
  chart: {
    title: "Total Income over total Expanse",
    subtitle: "Year, Income, and Expanse",
  },
};

export const lineChartData = [
  ["Days", "Income", "Expenses"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

export const lineChartOptions = {
  hAxis: {
    title: "Expanse",
  },
  vAxis: {
    title: "Amount",
  },
  series: {
    1: { curveType: "function" },
  },
};
