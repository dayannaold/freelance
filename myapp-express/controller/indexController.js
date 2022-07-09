const controller = {
    index: function (req, res, next) {
        res.render('index', { title: 'Projeto Freela' });
    },
    blog: function (req, res, next) {
        res.render('blog', { title: 'blog' });
    },
    categories: function (req, res, next) {
        res.render('categories', { title: 'Categorias' });
    },
    chat: function (req, res, next) {
        res.render('chat', { title: 'Envie e receba mensagens' });
    },
    chat: function (req, res, next) {
        res.render('chat', { title: 'envie uma mensagem' });
    },
    conectUs: function (req, res, next) {
        res.render('conectUs', { title: 'Envie Uma Mensagen' });
    },
    explorer: function (req, res, next) {
        res.render('explorer', { title: 'Explorar' });
    },
    highlights: function (req, res, next) {
        res.render('highlights', { title: 'Destaques' });
    },
    login: function (req, res, next) {
        res.render('login', { title: 'Login' });
    },
    profile: function (req, res, next) {
        res.render('login', { title: 'Perfil' });
    },
    savedItens: function (req, res, next) {
        res.render('login', { title: 'Itens Salvos' });
    }

};

module.exports = controller;