describe('BankAccount', function () {
  it("will create a bank account object with a single deposit", function() {
    var testBankAccount = new BankAccount("Sarah", 6);
    expect(testBankAccount.name).to.equal("Sarah");
    expect(testBankAccount.balance).to.equal(6);
  });
  it('will add amount entered into deposit method to balance',function() {
    var testBankAccount = new BankAccount("Sarah", 6);
    expect(testBankAccount.deposit(500)).to.equal(506);
  });
  it('will subtract amount entered into withdraw method from balance',function() {
    var testBankAccount = new BankAccount("Sarah", 6);
    expect(testBankAccount.withdraw(5)).to.equal(1);
  });
});
