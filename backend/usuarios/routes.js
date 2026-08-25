const router = require('express').Router();
const UserController = require('./controller');
const { check } = require('../common/middlewares/isAuth');

router.get('/id/:id', check, UserController.getUsuario);
router.get('/all', check, UserController.getAllUsers);

module.exports = router;