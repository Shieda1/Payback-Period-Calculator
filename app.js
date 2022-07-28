// https://calculator.swiftutors.com/payback-period-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const paybackPeriodRadio = document.getElementById('paybackPeriodRadio');
const initialInvestmentRadio = document.getElementById('initialInvestmentRadio');
const cashInflowperPeriodRadio = document.getElementById('cashInflowperPeriodRadio');

let paybackPeriod;
let initialInvestment = v1;
let cashInflowperPeriod = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

paybackPeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial Investment';
  variable2.textContent = 'Cash Inflow per Period';
  initialInvestment = v1;
  cashInflowperPeriod = v2;
  result.textContent = '';
});

initialInvestmentRadio.addEventListener('click', function() {
  variable1.textContent = 'Payback Period';
  variable2.textContent = 'Cash Inflow per Period';
  paybackPeriod = v1;
  cashInflowperPeriod = v2;
  result.textContent = '';
});

cashInflowperPeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Payback Period';
  variable2.textContent = 'Initial Investment';
  paybackPeriod = v1;
  initialInvestment = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(paybackPeriodRadio.checked)
    result.textContent = `Payback Period = ${computePaybackPeriod().toFixed(2)}`;

  else if(initialInvestmentRadio.checked)
    result.textContent = `Initial Investment = ${computeInitialInvestment().toFixed(2)}`;

  else if(cashInflowperPeriodRadio.checked)
    result.textContent = `Cash Inflow per Period = ${computeCashInflowperPeriod().toFixed(2)}`;
})

// calculation

function computePaybackPeriod() {
  return Number(initialInvestment.value) / Number(cashInflowperPeriod.value);
}

function computeInitialInvestment() {
  return Number(paybackPeriod.value) * Number(cashInflowperPeriod.value);
}

function computeCashInflowperPeriod() {
  return Number(initialInvestment.value) / Number(paybackPeriod.value);
}