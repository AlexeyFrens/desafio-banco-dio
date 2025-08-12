import {DioAccount} from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountName: number){
        super(name, accountName)
    }

    getLoan(loanAmount: number): void {
        if(this.validateAccount()){
            this.setBalance(this.getBalance() + loanAmount)
            console.log("========================================")
            console.log("Número da conta: " + this.getAccountNumber() + " | Proprietário: " + this.getName() + "\n")
            console.log("Empréstimo realizado com sucesso para sua empresa!\n")
            console.log("Saldo atualizado: R$ " + this.getBalance())
            console.log("========================================")
        }
    }
}