const express = require('express');
const morgan = require("morgan");
const layout = require("./views/layout");
const main = require ("./views/main");
let app = express()
let pg = require('pg')

const { db, Page, User } = require('./models')

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended : false}));


app.get('/', (req, res) => {
    res.send(layout(''))
})

db.authenticate().
then(() => {
    console.log('connected to the database');
})

const PORT = 3000;


const init = async () => {
    await Page.sync(); 
    await User.sync(); 
    
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
      });
}

init(); 