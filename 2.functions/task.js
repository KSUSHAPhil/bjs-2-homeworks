function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if(min > arr[i]) {
        min = arr[i]
    };
    if(max < arr[i]) {
        max = arr[i]
    };
  };
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    let sum = arr.reduce((total, amount) => total + amount, 0);
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) { return 0; }
    let diff = Math.max(...arr) - Math.min(...arr);
    return diff;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) { return 0; }
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sumOddElement += arr[i];
        } else if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        }
    }
    let diff = sumEvenElement - sumOddElement;
    return diff;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) { return 0; }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement ++;
        }
    }
    return aver = sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
    maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    return maxWorkerResult;
}
