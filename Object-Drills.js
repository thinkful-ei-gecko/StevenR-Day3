const [loaf] = {
    flour: 300,
    water: 210,
    hydration() {
        return (this.water / this.flour) * 100;
    }
}

//console.log(loaf.hydration());

const object = {
    foo: 'bizz',
    bar: 'bang',
    fum: 'fee foo',
    quux: 32,
    spam: 'denied'
}

let key = "";
for (let key in object){
    //console.log(`${key}: ${object[key]}`);

}

///////////////////////////////////////

const meals = {
    meal: ['breakfast', 'second breakfast', 'eleveness', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

const myArray = []
    {name: 'John Jacob', jobTitle: 'Scuba Diver', boss: "The Ocean"},
    {name: 'Phteven', jobTitle: 'Student', boss: "Steven"},
    {name: 'Tom Hanks', jobTitle: 'Saver of Private Ryan', boss: "Himself"},
];

function array (myArray){
    for (let i = 0; i < myArray.length; i++){
        if('boss' in myArray[i]){
        console.log(`${myArray[i].jobTitle} ${myArray[i].name} reports to ${myArray[i].boss}`);
        }
        else {console.log(`${myArray[i].jobTitle} ${myArray[i].name} doesnt report to anybody.`);
        }
    }
}

