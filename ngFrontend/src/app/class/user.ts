// user class - compare user schema/model for mongoose (backend/api/models/user)

export class User {
    public '_id': string;
    public name: string;
    public color: string;
    public veganity: number;
    public info: string;

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
