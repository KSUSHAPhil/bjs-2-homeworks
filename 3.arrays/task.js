"use strict";
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(users => users.gender.includes(gender)).map(users => users.age).reduce((acc, i, idx, arr) => {
    acc += i;
    if (idx === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    } ,0)
  return users === 0 ? 0 : result;
}