const express = require('express');
const router = express.Router();
var methodOverride = require('method-override')
router.use(methodOverride('_method'))
// para fazer método delete com form
//(form só funcionam com get e post)

const linkController = require('../controllers/linkController')

router.get('/', linkController.allLinks);

router.get('/:title', linkController.redirect)
//cuidado com a procura por parâmetro/rota:

/*se um title for criado com o nome "all" e a rota /:title 
estiver por cima, buscará primeiro o url do titulo "all"*/

//////
router.get('/edit/:id', linkController.loadLink)

router.get('/add', (req, res) => res.render('index', {err:false, body:{}}))

router.post('/', express.urlencoded({extended:true}), linkController.addLink);
router.post('/edit/:id',express.urlencoded({extended:true}), linkController.editLink)
//se vai usar formulário, urlencoded//////

router.delete('/:id', linkController.deleteLink)
router.delete('/', express.urlencoded({extended:true}),linkController.deleteLink)

module.exports = router