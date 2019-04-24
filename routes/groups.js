var express = require('express');
var router = express.Router();
const auth = require('../utils/auth')();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const groups = require('../controllers/groups');


// a simple test url to check that all of our files are communicating correctly.

router.post('/create', auth.authenticate(), groups.groups_create);

router.get('/:id',auth.authenticate(), groups.groups_details);

router.put('/:id/update',auth.authenticate(), groups.groups_update);

router.delete('/:id/delete',auth.authenticate(), groups.groups_delete);


module.exports = router;