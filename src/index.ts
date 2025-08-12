import {PeopleAccount} from "./class/PeopleAccount";
import {CompanyAccount} from "./class/CompanyAccount";
import {PremiumAccount} from "./class/PremiumAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jéssica", 22)
peopleAccount.deposit(10)
peopleAccount.withdraw(500)

const companyAccount: CompanyAccount = new CompanyAccount("Jonatan", 12)
companyAccount.getLoan(500)
companyAccount.deposit(10)
companyAccount.withdraw(20)

const premiumAccount: PremiumAccount = new PremiumAccount("Renata", 9289)
premiumAccount.deposit(900)
premiumAccount.withdraw(500)