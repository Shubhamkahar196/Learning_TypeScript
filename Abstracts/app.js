"use strict";
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    isPaymentValid() {
        return this.amount > 0;
    }
}
class CreditCardPayment extends Payment {
    processPayment() {
        console.log(`Processing credit card payment of $${this.amount}`);
    }
}
const payment = new CreditCardPayment(100);
payment.processPayment(); // Output: Processing credit card payment of $100
console.log(payment.isPaymentValid()); // Output: true
// explanation - 
// - Payment is an abstract class with an abstract method processPayment and a non-abstract method isPaymentValid.
// - CreditCardPayment is a class that extends Payment and provides an implementation for the processPayment method.
// - We can create an instance of CreditCardPayment and call both processPayment and isPaymentValid methods.
