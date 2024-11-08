// access modifiers:------------->
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  public addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }

  public getBalance() {
    return this._balance;
  }
}

const fakirAccount = new BankAccount(3, "Fakir", 20);
fakirAccount.addDeposit(50);
const currentBalance = fakirAccount.getBalance();
console.log(currentBalance); // 70
