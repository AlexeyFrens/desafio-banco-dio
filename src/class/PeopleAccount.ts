import {DioAccount} from "./DioAccount";

export class PeopleAccount extends DioAccount {
    private readonly doc_id: number

    constructor(doc_id: number, name: string, accountName: number) {
        super(name, accountName)
        this.doc_id = doc_id
    }
}