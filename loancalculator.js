function computeLoan() {
    
  //i created some variables
  var amount = document.getElementById("amount").value;
  var interest_rate = document.getElementById("interest_rate").value;
  var months = document.getElementById("months").value;

    var interest = (amount * (interest_rate * 0.01) / months);

    //tofixed(2) enables us have to numbers after d decimal place
    var payment = ((amount / months) + interest).toFixed(2);
    //the code below put comma, after 3 digits has been met
    //payment to string converts d payment value to string nd .replace converts it to money
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("payment").innerHTML = "Monthly Payment - $"+payment;

  return payment;
  

}