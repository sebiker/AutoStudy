// class Invoice {
//     total : number;

//     constructor(total : number) {
//         this.total = total;
//     }

//     printTotal() {
//         console.log(this.total);
//     }
// // the function on row 18-21 is the valid one
//     // printLater(time : number) {
//     //     setTimeout(function() {
//     //         console.log(this.total);
//     //     }, time);
//     // }

//         printLater(time : number) {
//         setTimeout(() => {
//             console.log(this.total);
//         }, time);
//     }
// }

// var invoice = new Invoice(100);
// invoice.printTotal();
// invoice.printLater(1000);


var dbQuery = function() : void {
    setTimeout(() => {
        console.log("Query results");
    }, 3000);
}

function loadPage(q : () => void) {
    console.log("Header");
    q();
    console.log("Menu");
    console.log("Sidebar");
}

loadPage(dbQuery);