"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evenorodd_1 = require("./evenorodd");
console.log((0, evenorodd_1.checkEvenOdd)(123));
console.log((0, evenorodd_1.checkEvenOdd)(45435));
console.log((0, evenorodd_1.checkEvenOdd)(2342348));
console.log((0, evenorodd_1.checkEvenOdd)(23134));
console.log((0, evenorodd_1.checkEvenOdd)(0));
for (var i = 0; i < 20; i++) {
    if (i < 10) {
        console.log("from if conition " + (0, evenorodd_1.checkEvenOdd)(i));
    }
    else {
        console.log("from elseconition " + (0, evenorodd_1.checkEvenOdd)(i));
    }
}
