let ss7a5: unknown = 1;
let ss7b5: any = 1;
let ss7c5:number = ss7a5+1; // lỗi vì k cho tính trực tiếp với kiểu unknown
let ss7d5:number = ss7b5+1;
console.log(typeof ss7c5);
console.log(typeof ss7d5);