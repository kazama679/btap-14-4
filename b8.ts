interface Book {
    title: string;
    author: string;
    price: number;
    printBook(): void;
    updateBook(title: string, author: string, price: number): void;
}
let book: Book = {
    title: "Đắc nhân tâm",
    author: "Dale Carnegie",
    price: 59000,
    printBook() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    },
    updateBook(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
};
console.log("ban đầu:");
book.printBook();
book.updateBook("hahaha", "Quang", 999999999999);
console.log("\nsau khi cập nhật:");
book.printBook();