// 2️ Payment System using Interface with Union Types

function processPayment(payment) {
    console.log(`Processing ₹${payment.amount} via ${payment.method}`);
}

processPayment({ amount: 5000, method: "upi" });

module.exports = { processPayment };
 