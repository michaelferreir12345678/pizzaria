const {Router} = require ('express');

const usuariosController = require('../controllers/usuariosControllers'); 

const router = Router();

router.get('/cadastrar', usuariosController.exibeFormularioCadastro);

router.post('/cadastrar', usuariosController.cadastrar)

router.get('/login', usuariosController.exibeFormularioLogin)
router.post('/login', usuariosController.fazerLogin)


module.exports = router;