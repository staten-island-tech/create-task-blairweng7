function calculateTip() {
  const billAmount = parseFloat(prompt("Enter the bill amount:"));
  
  //or statement
  if (isNaN(billAmount) || billAmount <= 0) {
    console.log("Please enter a valid number for the bill amount.");
    return;
  }

  const tipPercentage = parseFloat(prompt("Enter the tip percentage:"));
 
  if (isNaN(tipPercentage) || tipPercentage < 0) {
    console.log("Please enter a valid number for the tip percentage.");
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

//to make the values 2 decimal places
  console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
  console.log(`Total Amount (including tip): $${totalAmount.toFixed(2)}`);
}

function calculateAgain() {
  let calculateAgain2 = true;
  while (calculateAgain2) {
    calculateTip();
    const response = prompt("Do you want to calculate tip again? (yes/no)");
    calculateAgain2 = response.toLowerCase() === "yes";
  }
}
calculateAgain();


