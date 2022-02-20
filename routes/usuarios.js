const {Router} = require ('express');

const router = Router();

router.get('/cadastrar', (req,res) => {
    res.render('cadastrar')
});

router.post('/cadastrar', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

module.exports = router;