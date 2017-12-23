
$(function() {
    $('#set').on('click', () => { setUsers(); setMeals(); });    
    $('#get').on('click',get)    
});


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
            const contains = ['just veggies', 'mutton,', 'cheese', 'eggs', 'vegan', 'vegetarian', 'paleo']
            const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste dolorem, rem autem sequi voluptas placeat, maxime tenetur architecto repellat eligendi quibusdam consequatur corrupti officia molestiae impedit omnis! Quae, unde."
            for (var w=-2; w<4; w++) {
                for (var k=0; k<4; k++){
                    let m = {
                        cookId: randomUser(), // id of the cook
                        date: {
                            year: 2017,
                            week: w,
                            day: k > w ? k+1:k
                        },
                        diners: [], // array of diner IDs
                        dinersMax: 6-k, // max number of diners
                        mealDescription: lorem, // description of the meal
                        mealName: randomFood(), // name of the meal
                        veganity: Math.floor(Math.random()*4),
                        veganityText: contains[Math.floor(Math.random() * contains.length)]
                    }
                    for (var i=0;i<Math.random()*7;i++){
                        m.diners.push(randomUser()) 
                    }
                    $.post('http://localhost:8888/api/meal', m, (r) => $('#meals').append($('<pre>').text(JSON.stringify(r), null, 2)));
                }
            }
        }
    });
}

// send example users to API
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
        $.post('http://localhost:8888/api/user', m, (r) => $('#users').append($('<pre>').text(JSON.stringify(r), null, 2)));
    }
}

function get(){
    $.getJSON('https://localhost:8080' + $('#getUrl').val(), (r) => $('#get+div').append($('<pre>').text(JSON.stringify(r))))
}