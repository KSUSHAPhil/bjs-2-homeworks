"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);

  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
   }
   else if (d == 0) {
    arr[0] = -b / (2 * a);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let per = percent / 1200;
    if (isNaN(per)) {
    return false;
    }

    if (isNaN(contribution)) {
    return false;
    }
    if (isNaN(amount)) {
    return false;
    }

    let creditBody = amount - contribution;
    let monthsPay = creditBody * (per + (per / (((1 + per) ** countMonths) -1 )));
    let totalPay = (monthsPay * countMonths).toFixed(2);
    return Number (totalPay);
}