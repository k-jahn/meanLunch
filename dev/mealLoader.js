$(function() {
    $('button').on('click',set)    
});
function set(){
    for (var k=0; k<5; k++){
        let m = {
            date: {
                year: 2017,
                week: 0,
                day: k
            },
            cookId: k, // id of the cook
            mealName: ['pasta','soup','lasagne','curry','falafel'][k], // name of the meal
            mealDescription: '', // description of the meal
            vegetarian: true,
            vegan: !((-1) ** k),
            dinersMax: 6, // max number of diners
            diners: [k,(k+1)%4], // array of diner IDs
        }
        $.post('http://localhost:8888/api/meal', m, (r) => console.log(r));
    }
}