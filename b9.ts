function checkSoNt(n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function checkAll(arr: number[]): boolean {
    for (let i of arr) {
        if (!checkSoNt(i)) {
            return false;
        }
    }
    return true;
}
let ss7a9: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ss7b9: number[] = [3, 5, 7, 11, 13];
console.log(checkAll(ss7a9));
console.log(checkAll(ss7b9));