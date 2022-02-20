const express = require('express'); 

const app = express();

app.get('/', (req,res) => {
    res.send('Chegou aqui')
})

app.listen(5000, () => console.log('Servidor em execução'));