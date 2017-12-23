// meal class - compare meal schema/model for mongoose (backend/api/models/meal)

export class Meal {
    date: { // date
        year: Number,
        week: Number,
        day: Number
    };
    cookId: Number; // id of the cook
    diners: [Number]; // array of diner IDs
    dinersMax: Number; // max number of diners
    mealDescription: String; // description of the meal
    mealName: String; // name of the meal
    veganity: number;
    veganityText: String;

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
