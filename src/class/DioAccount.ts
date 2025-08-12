export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName(): string {
        return this.name
    }

    getAccountNumber(): number {
        return this.accountNumber
    }

    getBalance(): number {
        return this.balance
    }

    setBalance(balance: number): void {
        this.balance = balance
    }

    deposit(amount: number): void {
        if (this.validateAccount()) {
            this.balance += amount
            console.log("========================================")
            console.log("Número da conta: " + this.accountNumber + " | Proprietário: " + this.name + "\n")
            console.log("Depósito realizado com sucesso!\n")
            console.log("Saldo atualizado: R$ " + this.balance)
            console.log("========================================")
        }
    }

    withdraw(amount: number): void {
        if(!(this.balance > amount)) {
            console.log("========================================")
            console.log("Número da conta: " + this.accountNumber + " | Proprietário: " + this.name + "\n")
            console.log("Erro ao fazer saque, saldo insuficiente!")
            console.log("========================================")
        }else {
            if (this.validateAccount()) {
                this.balance -= amount
                console.log("========================================")
                console.log("Número da conta: " + this.accountNumber + " | Proprietário: " + this.name + "\n")
                console.log("Saque realizado com sucesso!\n")
                console.log("Saldo atualizado: R$ " + this.balance)
                console.log("========================================")
            }
        }
    }

    validateAccount(): boolean {
        if (this.status) {
            return this.status;
        }

        throw new Error("Conta inválida");
    }
}