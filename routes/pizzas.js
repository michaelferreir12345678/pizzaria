const {Router} = require ('express');
const usuarioEstaLogado = require('../middlewares/usuarioLogado');
const usuarioEhAdmin = require('../middlewares/usuarioEhAdmin')
const uploadFotos = require('../middlewares/uploadFotos')

const router = Router();

router.get('/', usuarioEstaLogado, (req,res) => {
    res.render('index')
})

// Rotas para  usuário administradores
router.use(usuarioEhAdmin);

router.get('/cadastrar', (req, res) => {
    res.send('ok')
}) 
router.post('/cadastrar', uploadFotos, (req, res) => {
    res.send('ok')

router.get('/lista', (req, res) => {
    res.send('lista');
})    
})

module.exports = router;