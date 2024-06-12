"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b) - 4 * a * c;
  if (discriminant === 0) {
    arr = [{x1: - b / (2 * a)}];
  } else if (discriminant > 0) {
    arr = [{
      x1: (- b + Math.sqrt(discriminant)) / (2 * a),
      x2: (- b - Math.sqrt(discriminant)) / (2 * a)
    }];
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