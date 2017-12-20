// meal class - compare meal schema/model for mongoose (backend/api/models/meal)

export class Meal {
    date: { // date
        year: Number,
        week: Number,
        day: Number
    };
    cookId: Number; // id of the cook
    mealName: String; // name of the meal
    mealDescription: String; // description of the meal
    vegetarian: Boolean;
    vegan: Boolean;
    dinersMax: Number; // max number of diners
    diners: [Number]; // array of diner IDs

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
