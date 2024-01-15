function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  let messege = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return messege;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
