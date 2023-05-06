const {create,fetch,update} = require('../controllers/listControllers');


const router = require('express').Router();

router.post('/create',create);
router.post('/fetch',fetch);
router.post('/update/:id',update);



module.exports = router;