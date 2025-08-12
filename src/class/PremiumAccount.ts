import {DioAccount} from "./DioAccount";

export class PremiumAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit(amount: number): void {
        if (this.validateAccount()) {
            this.setBalance(this.getBalance() + amount + 10)
            console.log("========================================")
            console.log("Número da conta: " + this.getAccountNumber() + " | Proprietário: " + this.getName() + "\n")
            console.log("Depósito realizado com sucesso!\n")
            console.log("Saldo atualizado: R$ " + this.getBalance())
            console.log("========================================")
        }
    }
}