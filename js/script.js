let appData = {
  config: "all prices in dollars",
  budget: 0,
  data: [],
  expenses: {},
  optionalExpenses: [],
  moneyPerDay: [],
  optionalIncome: [],
};

let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[2],
  optionalExpensesBtn = document.getElementsByTagName("button")[3],
  countBtn = document.getElementsByTagName("button")[4],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector(".choose-sum"),
  percentValue = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value"),
  greenDob = document.querySelector(".green-dob"),
  redUmen = document.querySelector(".red-umen"),
  dopPolya = document.querySelector(".dopol-polya"),
  typeBudjet = document.querySelector(".type-budget"),
  typeData = document.querySelector(".type-data");

typeData.style.backgroundColor = 'white';
typeBudjet.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});

typeData.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});

for (let i = 0; i < expensesItem.length; i++) {
  expensesItem[++i].addEventListener("keyup", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  });
}

for (let i = 0; i < optionalExpensesItem.length; i++) {
  optionalExpensesItem[i].addEventListener("keyup", function () {
    this.value = this.value.replace(/[^\d]/g, "");
  });
}

percentValue.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});

sumValue.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^\d]/g, "");
});

startBtn.addEventListener("click", function () {
  let time = typeData.value,
    money = +typeBudjet.value,
    dopDohod = +sumValue.value,
    procent = +percentValue.value,
    optiIncome = incomeItem.value,
    monPerD = money / 30;

  appData.data = time;
  appData.budget = money;
  appData.optionalIncome = optiIncome.split(", ");

  monthSavingsValue.textContent =
    ((dopDohod * procent) / 100 / 12).toFixed(1) + " $";
  yearSavingsValue.textContent = ((dopDohod * procent) / 100).toFixed(1) + " $";
  appData.savingsValue = dopDohod;
  appData.savingsPercent = procent;

  if (monPerD <= 50 && monPerD > 0) {
    levelValue.textContent = "Low";
    appData.lvlValue = "Low";
  } else if (monPerD > 50 && monPerD <= 100) {
    levelValue.textContent = "Medium";
    appData.lvlValue = "Medium";
  } else if (monPerD > 100) {
    levelValue.textContent = "High";
    appData.lvlValue = "High";
  } else {
    levelValue.textContent = "Enter budget and required expenses";
  }

  budgetValue.textContent = money.toFixed() + " $";
  incomeValue.textContent = dopDohod + " $";

  yearValue.value = new Date(Date.parse(time)).getFullYear();
  dayValue.value = new Date(Date.parse(time)).getDate();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  if (isNaN(yearValue.value) || isNaN(dayValue.value) || isNaN(monthValue.value)){
    yearValue.value = ' ';
    dayValue.value = ' ';
    monthValue.value = ' ';
  }
  
  
});

let createdValue = document.createElement("input");

greenDob.addEventListener("click", function () {
  let type = "createdName";
  let i = expensesItem.length - 1;
  for (let i = expensesItem.length - 1; i < expensesItem.length; i++) {
    this[type + i] = document.createElement("input");
  }
  this[type + i].classList.add("expenses-item");
  this[type + i].type = "text";
  this[type + i].placeholder = "Name";
  dopPolya.appendChild(this[type + i]);

  let type1 = "createdValue";
  let g = expensesItem.length - 1;
  for (let g = expensesItem.length - 1; g < expensesItem.length; g++) {
    this[type1 + g] = document.createElement("input");
  }
  this[type1 + g].classList.add("expenses-item");
  this[type1 + g].classList.add("padding-added");
  this[type1 + g].type = "text";
  this[type1 + g].placeholder = "Цена";
  dopPolya.appendChild(this[type1 + g]);
});

redUmen.addEventListener("click", function () {
  dopPolya.removeChild(expensesItem[expensesItem.length - 1]);
  dopPolya.removeChild(expensesItem[expensesItem.length - 1]);
});

expensesBtn.addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != ""
    ) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i -= 1;
    }
  }
  expensesValue.textContent = sum + " $";
});

optionalExpensesBtn.addEventListener("click", function () {
  let optSum = 0;
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    optSum = optSum + +opt;
    appData.optionalExpenses[i] = opt;
  }
  optionalExpensesValue.textContent = optSum + " $";
});

for (let i = 0; i < expensesItem.length; i++) {
  let exN = expensesItem[++i].value;
  let sumEx;
  sumEx += +exN;
}

countBtn.addEventListener("click", function () {
  let sumEx = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let exN = expensesItem[++i].value;
    sumEx += +exN;
    dayBudgetValue.textContent =
      ((+typeBudjet.value - sumEx) / 30).toFixed(1) + " $";
    appData.moneyPerDay = ((+typeBudjet.value - sumEx) / 30).toFixed(1);
  }
});

percentValue.readOnly = true;
sumValue.readOnly = true;
sumValue.style.backgroundColor = 'rgba(165, 165, 165, 0.05)';
percentValue.style.backgroundColor = 'rgba(165, 165, 165, 0.05)';

checkSavings.addEventListener("click", function () {
  if (checkSavings.checked) {
    percentValue.readOnly = false;
    sumValue.readOnly = false;
    appData.savings = true;
    sumValue.style.backgroundColor = 'white';
    percentValue.style.backgroundColor = 'white';
  } else {
    appData.savings = false;
    sumValue.readOnly = true;
    percentValue.readOnly = true;
    sumValue.value = "";
    percentValue.value = "";
    incomeValue.textContent = "";
    sumValue.style.backgroundColor = 'rgba(165, 165, 165, 0.05)';
    percentValue.style.backgroundColor = 'rgba(165, 165, 165, 0.05)';
  }
});
