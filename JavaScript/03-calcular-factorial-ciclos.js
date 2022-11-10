let factorial1 = 1;
let num = 10;
while (true) {
  factorial1 *= num;
  num--;
  if (num === 1) break;
}
console.log(factorial1);

let dato = 10;
let factorial2 = dato;
for (let i = 1; i < dato; i++) {
  factorial2 = factorial2 * i;
}
console.log(factorial2);

let i = 1;
let factorial3 = i;
while (i <= 10) {
  factorial3 = factorial3 * i;
  i++;
}
console.log(factorial3);
