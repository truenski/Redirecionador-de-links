const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')
const path = require('path')


//Conectar à coleção-----------------------------------
mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//OU .then(db=>{console.log(db).catch(err=>{console.log(err)})})

app.use('/',linkRoute)

let db = mongoose.connection;
db.on('error', () => { console.log('errou ai') });
db.once("open", () => { console.log("banco carregado");
})
//quando a conexão é feita, once executa apenas 1 vez

app.set('view engine','ejs');//
app.set('views', path.join(__dirname, "templates"))//











app.listen(port, () => { console.log('Ta indo')})