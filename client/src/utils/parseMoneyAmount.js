export const parseMoneyAmount = (amount) => {
  if (amount) {
    return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
  return '-';
};
