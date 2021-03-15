import currencyLocaleTable from "../utils/currency-locale-table";

export const formatCurrency = (value, currency) =>
  value.toLocaleString(currencyLocaleTable[currency], {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  });
