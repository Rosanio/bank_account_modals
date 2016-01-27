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
  $("#signUpLink").click(function() {
    $(".signUp").show();
    $(".accountDisplay").hide();
  });

  $("#logo").click(function() {
    $(".signUp").show();
    $(".accountDisplay").hide();
  });

  $("form#bank-form").submit(function(event) {
    var name = $("input#name").val();
    var balance = parseInt($("input#init").val());
    var newAccount = new BankAccount(name, balance);

    event.preventDefault();

    $(".signUp").hide();
    $(".accountDisplay").show();

    $(".firstName").text(name);
    $("#money").text(balance);

    $('form#depositForm').submit(function(event) {
      var deposit = parseInt($("input#deposit").val());
      var depoBalance = newAccount.deposit(deposit);
      $("#money").text(depoBalance);
      event.preventDefault();
    });

    $("form#withdrawlForm").submit(function(event) {
      var withdraw = parseInt($("input#withdraw").val());
      if (withdraw > newAccount.balance) {
        alert("There is not enough money in your account for this transaction.");
      } else {
        var withdrawBalance = newAccount.withdraw(withdraw);
        $("#money").text(withdrawBalance);
      }
    event.preventDefault();
    });
  });
});
