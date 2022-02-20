const Link = require('../models/Link')


//=======================================
const redirect = async (req, res, next) => {

    let title = req.params.title;
    try {
        let doc = await Link.findOneAndUpdate({ title},{$inc:{click:1}})
        //find() comando para buscar no banco de dados Mongo
        //é preciso esperar para encontrar tudo no banco de dados
console.log(doc);
if (doc) {
     res.redirect(doc.url);
    }
    else {
        next()
    }
} catch (err) { 
    res.send('aqui1') 
}
}

const atualizar = (req,res) =>{res.redirect('/')}


//===============================================
const addLink = async (req, res) => {

    let link = new Link(req.body)

    try {
        let doc = await link.save()
        //é preciso esperar para encontrar tudo no banco de dados

        res.redirect('/');
    } catch (err) { res.render('index.ejs', { err, body: req.body });
 }
}


//==========================================================
const allLinks = async (req, res) => {
    try {
        let docs = await Link.find({});
        //é preciso esperar para encontrar tudo no banco de dados
        res.render('all', { links:docs });
    } catch (err) { res.send('aqui2'); }
}

const deleteLink = async (req, res) => {
    
    let id = req.params.id;
    if(!id){
        id = req.body.id;
        //se não tem id por url, pega do body
    }

    try {
      await Link.findByIdAndDelete(id)
        //2°way Link.deleteOne({_id:id})
res.redirect('/')//
    } catch (err) { res.send('aqui3'); }
}
//////////////////////////////////////////////
const loadLink = async (req, res) => {
    
    let id = req.params.id;
  

    try {
     let doc = await Link.findById(id)
        //2°way Link.deleteOne({_id:id})
res.render('edit', {err: false, body: doc})
    } catch (err) { res.send('aqui4'); }
}

////////////////////////

const editLink = async (req, res) => {

    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

let id = req.params.id;
if(!id){
    id= req.body.id;
}

    try {
        let doc = await Link.updateOne({_id: id}, link)
        //é preciso esperar para encontrar tudo no banco de dados

        res.redirect('/');
    } catch (err) { res.render('edit', { err, body: req.body });
 }
}






module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink}