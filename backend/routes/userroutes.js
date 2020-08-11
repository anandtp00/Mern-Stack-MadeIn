const router = require('express').Router();


//controllers
const usercontroller = require('../controllers/usercontroller');

router.get('/',usercontroller.index);
router.post('/adduser',usercontroller.adduser);
router.get('/home',usercontroller.dashboard);




module.exports = router;