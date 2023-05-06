const {login,register,updateDetails} = require('../controllers/userControllers');

const router = require('express').Router();

router.post('/login',login);
router.post('/register',register);
router.post('/updateDetails/:id',updateDetails);



module.exports = router;