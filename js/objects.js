(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
        person.firstName = "Nate";
        person.lastName = "Boster";
        person.sayHello = function () {
             return "Hello from " + this.firstName + " " + this.lastName + "!";
        };
        console.log(person.sayHello());
        console.log("---------------ooo");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function percent(num,per){
        return ((num/100)*per).toFixed(2);
    }

    shoppers.forEach(function(shopper){
        if(shopper.amount > 200){
            console.log("Original total for " + shopper.name + " was " + shopper.amount.toFixed(2) + ".\n"
                + "with their discount they will have " + percent(shopper.amount,12) + " taken off their total.\n"
                + "They will now pay " + (shopper.amount - percent(shopper.amount,12)).toFixed(2));
        }else{
            console.log("the total for " + shopper.name + " is " + shopper.amount.toFixed(2) + "\n and they will have no discount.");
        }
    });
    console.log("---------------ooo");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "a Wild sheep chase",
            author:{
                firstName:"Haruki",
                lastName:"Murakami"
            }
        },
        {
            title: "The Bell jar",
            author:{
                firstName:"Sylvia",
                lastName:"Plath"
            }
        },
        {
            title: "Parable of the Sower",
            author:{
                firstName:"Octavia",
                lastName:"Butler"
            }
        },
        {
            title: "The Stranger",
            author:{
                firstName:"Albert",
                lastName:"Camus"
            }
        },
        {
            title: "Wolf in white van",
            author:{
                firstName:"John",
                lastName:"Darnielle"
            }
        }
    ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    createBook("Norwegian wood","Haruki","Murakami");

    books.forEach(function(book,index){
        console.log("Book # " + (index + 1)
            + "\nTitle: " + book.title
            + "\nAuther:" + book.author.firstName + " " + book.author.lastName
            + "\n ---");
    });
    console.log("---------------ooo");

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // function createBook(title,firstN,lastN){
    //     books.push(
    //         {
    //             title: title,
    //             author:{
    //                 firstName:firstN,
    //                 lastName:lastN
    //             }
    //         },
    //     )
    // }

    function showBookInfo(book){
        console.log()
    }

})();


// function multi(a,b) {
//     var c = 0;
//     for (i = 0; i < a; i++){
//         c += b;
//     }
//     console.log(c);
// }

//---------------------------------------------ooo
