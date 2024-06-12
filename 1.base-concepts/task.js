"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    arr.push(- b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((- b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((- b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let credit = amount - contribution;
  let regularSum = credit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let entirePayment = regularSum * countMonths;
  return Number(entirePayment.toFixed(2));
}