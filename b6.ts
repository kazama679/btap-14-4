function void6(a:string):void {
    console.log("void");
}
console.log(void6("b")); // dù truyền vào b nhưng hàm vẫn chỉ log "void", vì hàm void k trả về bky giá trị nào

function never6() {
    let a = 1;
    while (true) {
        console.log(a);
        a++;
    }
}
never6();
// type never thường dùng trong vòng lặp vô tận (tức là k có điểm dừng)