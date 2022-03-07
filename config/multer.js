const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const configuracao = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", 'public', 'image'),
        filename: (req, file, callback) => {
            const hash = crypto.randomBytes(8).toString('hex');
            const nomeArquivo = '${hash}-${file.originalname}';

            callback(null, nomeArquivo)
        }
    })
};

module.exports = configuracao