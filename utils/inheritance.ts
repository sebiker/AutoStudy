class Report1 {
    companyProfile: string;

    constructor(public name: string) {
        this.companyProfile = name;
    }
}

class Invoice extends Report1 {
    constructor(public name: string, public total: number) {
        super(name);
    }

    printInvoice() {
        return this.name + ", " + this.total;
    }
}

class BillOfLading extends Report1 {
    constructor(public name: string, public city: string, public state: string) {
        super(name);
    }

    printBol() {
        return this.name + ", " + this.city + ", " + this.state;
    }
}

var invoice = new Invoice("Google", 1000);
var bol = new BillOfLading("Yahoo", "Scottsdale", "AZ");

console.log(invoice.printInvoice());
console.log(bol.printBol());