const mongoose = require('mongoose')

//Molde de link------------------------
const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
})

//correlacionar molde e esquema-------------
module.exports = mongoose.model('Link', linkSchema)
//nome 'Link' será pluralizado na criação do collection


//Novo objeto link------------------------
// let link = new Link({
//     title: 'twitter',
//     url: 'https://twitter.com/progrbr',
// })

//salvar no banco de dados-----------------------
//  link.save().then(doc => {
//     console.log(doc)
// }).catch(err => { console.log(err) }) 