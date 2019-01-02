class BankAccount{
  constructor(type, money){
      this.type = type,
      this.money = money,
      this.transactionHistory = []
  }

  withdraw(withdrawalAmount){
      this.money = this.money-withdrawalAmount;
      this.transactionHistory.push(-withdrawalAmount);
  }
  deposit(depositAmount){
      this.money= this.money+depositAmount;
      this.transactionHistory.push(depositAmount);
  }
  showBalance(){
      return `this is what you have ${this.money}`
  }

}
const muneera = new BankAccount('Doller' , 100);

console.log(muneera);
muneera.withdraw(50);
console.log(muneera);
muneera.deposit(100);
console.log(muneera);
console.log(muneera.showBalance());