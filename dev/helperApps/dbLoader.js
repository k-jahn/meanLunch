
$(function() {
    $('#meals').on('click',setMeals)    
    $('#users').on('click',setUsers)    
    $('#get').on('click',get)    
});

// send example meals to api
function setMeals(){
    $.getJSON('http://localhost:8888/api/user/',function(res) {
        console.log(res);
        if (res.users.length==0) {
            console.log('add users first!')
        } else{
            for (var k=0; k<5; k++){
                let m = {
                    date: {
                        year: 2017,
                        week: 0,
                        day: k
                    },
                    cookId: res.users[Math.floor(res.users.length * Math.random())]['_id'], // id of the cook
                    mealName: ['pasta','soup','lasagne','curry','falafel'][k], // name of the meal
                    mealDescription: '', // description of the meal
                    vegetarian: !((-1) ** k),
                    vegan: !((-1) ** k),
                    dinersMax: 6-k, // max number of diners
                    diners: [k,(k+1)%4], // array of diner IDs
                }
                $.post('http://localhost:8888/api/meal', m, (r) => $('#meals+div').append($('<p>').text(JSON.stringify(r))));
            }
        }
    });
}

//load 
function setUsers() {
    for (var k = 0; k < 5; k++) {
        let m = {
            name: ['alice', 'bob', 'carol', 'david', 'erika'][k], // name
            vegetarian: !((-1) ** k),
            vegan: !((-1) ** k),
        }
        $.post('http://localhost:8888/api/user', m, (r) => $('#users+div').append($('<p>').text(r)));
    }
}

function get(){
    $.getJSON('http://localhost:8888' + $('#getUrl').val(), (r) => $('#get+div').append($('<p>').text(JSON.stringify(r))))
}