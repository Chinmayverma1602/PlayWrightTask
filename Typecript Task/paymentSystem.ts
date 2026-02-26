// 2️ Payment System using Interface with Union Types

interface Payment {
    amount: number;
    method: "creditCard" | "debitCard" | "upi";
}

function processPayment(payment: Payment): void {
    console.log(`Processing ₹${payment.amount} via ${payment.method}`);
}

processPayment({ amount: 5000, method: "upi" });

export { processPayment, Payment };
