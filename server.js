const morgan = require('morgan');
const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, welcome to the express lab!</h1>')
})

// exercise 1

app.get('/greeting', (req, res) => {
    const name = req.query.name;
    res.send(`Thank you for visting this lab exercise ${name}`)
})

//execise 2

app.get('/roll/:number', (req, res) => {
    const givenNumber = req.params.number
if (isNaN(givenNumber)) {
        res.send('You must specify a number brother')
}

else if (!isNaN(givenNumber)) {
    const randomNumber = Math.floor(Math.random() * (givenNumber));
    res.send (`Your rolled a ${randomNumber}`) 
}
})


//exercise 3

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
app.get('/collectibles/:index', (req, res) => {

    const itemIndex = parseInt(req.params.index,);
    

    if (itemIndex < 0 || isNaN(itemIndex) || itemIndex >= collectibles.length){
// if (itemIndex  !== 0 || 1 || 2) did not work.
        res.send ('This item is not in stock, check back soon buddy boy >:D')
    }
    
    else {
        const item = collectibles[itemIndex];
        res.send(`So you would like the ${item.name}? For ${item.price}, it can be yours!`)
    } 
})
//ReferenceError: Cannot access 'item' before initialization


//exercise 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})