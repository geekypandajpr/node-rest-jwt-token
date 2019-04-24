var express = require('express');
var router = express.Router();
const auth = require('../utils/auth')();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const roles = require('../controllers/role');

router.post('/create', auth.authenticate(), roles.role_create);

router.get('/:id', auth.authenticate(), roles.role_details);

router.put('/:id/update', auth.authenticate(), roles.role_update);

router.delete('/:id/delete', auth.authenticate(), roles.role_delete);


module.exports = router;