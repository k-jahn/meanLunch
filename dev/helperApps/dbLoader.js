
$(function() {
    $('#meals').on('click',setMeals)    
    $('#users').on('click',setUsers)    
    $('#get').on('click',get)    
});
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste dolorem, rem autem sequi voluptas placeat, maxime tenetur architecto repellat eligendi quibusdam consequatur corrupti officia molestiae impedit omnis! Quae, unde."


// send example meals to api
function setMeals(){
    $.getJSON('http://localhost:8888/api/user/',function(res) {
        if (res.users.length==0) {
            console.log('add users first!')
        } else{
            const randomUser = () => res.users[Math.floor(res.users.length * Math.random())]['_id'];
            const attr = ['green', 'thai', 'spicy', 'boring', 'red', 'tasty', 'holy', 'salty', 'magic','fried'];
            const food = ['pasta', 'soup', 'lasagne', 'curry', 'falafel', 'gulash', 'sausages', 'spaghetti', 'pizza'];
            const randomFood = () => (attr[Math.floor(Math.random() * attr.length)]+' '+food[Math.floor(Math.random()*food.length)]);
            for (var w=-2; w<4; w++) {
                for (var k=0; k<4; k++){
                    let m = {
                        date: {
                            year: 2017,
                            week: w,
                            day: k > w ? k+1:k
                        },
                        cookId: randomUser(), // id of the cook
                        mealName: randomFood(), // name of the meal
                        mealDescription: 'lorem', // description of the meal
                        vegetarian: true,
                        vegan: true,
                        dinersMax: 6-k, // max number of diners
                        diners: [], // array of diner IDs
                    }
                    for (var i=0;i<Math.random()*7;i++){
                        m.diners.push(randomUser()) 
                    }
                    $.post('http://localhost:8888/api/meal', m, (r) => $('#meals+div').append($('<p>').text(JSON.stringify(r))));
                }
            }
        }
    });
}

//load 
function setUsers() {
    const names = [
        'alice',
        'bob',
        'carol',
        'david', 
        'echo',
        'frederik',
        'gioia',
        'hermann',
        'ines',
        'jacques',
        'katta',
        'leo',
        'manuela',
        'norbert',
        'ottilie',
        'paul',
        'quenya',
        'rasputin'
    ];
    
    for (var k = 0; k < names.length; k++) {
        const randomCol = () => '#' + Math.floor(Math.random() * (256 ** 3)).toString(16)
        let m = {
            name: names[k], // name
            veganity: Math.floor(Math.random()*4),
            color: randomCol(),
        }
        $.post('http://localhost:8888/api/user', m, (r) => $('#users+div').append($('<p>').text(r)));
    }
}

function get(){
    $.getJSON('http://localhost:8888' + $('#getUrl').val(), (r) => $('#get+div').append($('<p>').text(JSON.stringify(r))))
}