function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();
  const budget = {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
  return budget;
}

console.log(getBudgetForCurrentYear(2100, 5200, 1090));
