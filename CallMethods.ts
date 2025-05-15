import { checkEvenOdd } from './evenorodd';

console.log(checkEvenOdd(123));
console.log(checkEvenOdd(45435));
console.log(checkEvenOdd(2342348));
console.log(checkEvenOdd(23134));
console.log(checkEvenOdd(0));

for (let i=0; i<20;i++) {
    if(i<10) {
    console.log("from if conition "+checkEvenOdd(i));
}
else {
    console.log("from elseconition "+checkEvenOdd(i));
}
}