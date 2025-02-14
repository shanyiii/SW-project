var express = require('express');
var router = express.Router();

var MemberModifyMethod = require('../controllers/modify_controller');

MemberModifyMethod = new MemberModifyMethod();
router.post('/register', MemberModifyMethod.postRegister);
router.post('/login', MemberModifyMethod.postLogin);
router.post('/passengerInfo', MemberModifyMethod.postPassenger);
router.post('/ownerInfo', MemberModifyMethod.postOwner);


module.exports = router;
