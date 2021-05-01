const testTruthy = (val)=>{
    return val ? console.log("Truthy") : console.log("falsy");
}

console.log("number 4")
testTruthy(4)
const user = { name: "alec", password: "password"}

console.log("users nonexistent age")
testTruthy(user.age)

//Creating a class 

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
        this.printIsbn = () => {
            console.log(this.printIsbn);
        };
    }
}

const book = new Book("Learning DS and algorithms",400, "iab123")


book.printIsbn()

///other alternative
