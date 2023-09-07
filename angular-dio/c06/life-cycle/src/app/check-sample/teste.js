
let numeros = [];
let m2 = 0, m3 = 0, m4 = 0, m5 = 0;

for (let i = 1; i <= 100; i++) {
  numeros.push(i);
}

console.log(numeros);
for (let i = 2; i < 6; i++) {
  numeros.forEach(numero => {
    if(numero % 2 === 0 ) m2++;
    if(numero % 3 === 0 ) m3++;
    if(numero % 4 === 0 ) m4 ++;
    if(numero % 5 === 0 ) m5 += 1;
  })
}

console.log(m2 + " Multiplo(s) de 2");
console.log(m3 + " Multiplo(s) de 3");
console.log(m4 + " Multiplo(s) de 4");
console.log(m5 + " Multiplo(s) de 5");
