export function sumNumArr(arrayOfNum) {
  let sum = 0;
  for (let i = 0; i < arrayOfNum.length; i++) {
    if (typeof arrayOfNum[i] !== 'number') return;
    sum += arrayOfNum[i];
  }
  return sum;
}

export function sumItemPrice(arrayOfObj) {
  let sum = 0;
  for (const obj of arrayOfObj) {
    if (typeof obj.price !== 'number') return;
    sum += obj.price;
  }
  return sum.toFixed(2);
}
