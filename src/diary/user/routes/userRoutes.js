const { Router} = require('express');
const { registerNewUser } = require('../controllers/createUser.controller');
const { userLogin } = require('../controllers/loginUser.controller');

const router = Router();

router.post('/signup', registerNewUser);
router.post('/login', userLogin);


module.exports = router;