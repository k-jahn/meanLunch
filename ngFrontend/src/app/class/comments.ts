// commentThread class - compare user schema/model for mongoose (backend/api/models/user)


export class Comments {
    date: { // date
        year: Number,
        week: Number,
        day: Number
    };
    comments: [{userId: string;
        timestamp: number;
        body: string; }];

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
