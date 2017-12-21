// user class - compare user schema/model for mongoose (backend/api/models/user)

export class User {
    '_id': string;
    name: string;
    color: string;
    veganity: number;

    constructor(raw) {
        this.setVals(raw);
    }

    setVals(raw: Object) {
        // set properties from raw input
        for (const prop of Object.keys(raw)) {
            this[prop] = raw[prop];
        }
    }
}
