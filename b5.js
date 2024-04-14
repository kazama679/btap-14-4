"use strict";
let ss7a5 = 1;
let ss7b5 = 1;
let ss7c5 = ss7a5 + 1; // lỗi vì k cho tính trực tiếp với kiểu unknown
let ss7d5 = ss7b5 + 1;
console.log(typeof ss7c5);
console.log(typeof ss7d5);
