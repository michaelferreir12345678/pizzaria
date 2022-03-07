function ehAdmin (req, res, next) {
    const usuario = req.session.usuario;
    if (usuario.ehAdmin) {
        next();
    }
    
    delete req.session.usuario;
    req.session.destroy(console.log);

    return res.redirect('/usuarios/login')

};

module.exports = ehAdmin