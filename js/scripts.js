function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  return this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  return this.balance -= amount;
}

$(function() {
  $("form#bank-form").submit(function(event) {
    var name = $("input#name").val();
    var balance = parseInt($("input#init").val());
    var newAccount = new BankAccount(name, balance);

    event.preventDefault();

    $(".signUp").hide();
    $(".accountDisplay").show();

    $(".firstName").text(name);
    $("#money").text(balance);

    $("form#money-form").submit(function(event) {
      var deposit = parseInt($("input#deposit").val());
      var withdraw = parseInt($("input#withdraw").val());
      console.log(deposit);
      console.log(withdraw);



      if (isNaN(withdraw)) {
        var depoBalance = newAccount.deposit(deposit);
        $("#money").text(depoBalance);
      } else if (isNaN(deposit)) {
        if (withdraw > newAccount.balance) {
          alert("There is not enough money in your account for this transaction.");
        } else {
          var withdrawBalance = newAccount.withdraw(withdraw);
          $("#money").text(withdrawBalance);
        }
      } else {
        var total = deposit - withdraw;
        if (-total > newAccount.balance) {
          alert("There is not enough money in your account for this transaction.");
        } else {
        var totalBalance = newAccount.deposit(total);
        $("#money").text(totalBalance);
        }
      }

    event.preventDefault();

    });
  });

});
