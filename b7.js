"use strict";
let students7 = [
    { id: 1, name: "Alice", class: "PTIT1" },
    { id: 2, name: "Bob", class: "PTIT2" },
    { id: 3, name: "Charlie", class: "PTIT1" },
    { id: 4, name: "David", class: "PTIT3" },
    { id: 5, name: "Emma", class: "PTIT4" }
];
function locHs(studentArray, className) {
    return studentArray.filter(student => student.class === className);
}
console.log(locHs(students7, "PTIT1"));
