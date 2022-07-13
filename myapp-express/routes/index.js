var express = require('express');
const controller = require('../controller/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);
router.get('/chat', controller.chat);
router.get('/categories', controller.categories);
router.get('/conectUs', controller.conectUs);
router.get('/login', controller.login);
router.get('/highlights', controller.highlights);
router.get('/profile', controller.profile);
router.get('/savedItens', controller.savedItens);
router.get('/explorer', controller.explorer);
router.get('/blog', controller.blog);

module.exports = router;
