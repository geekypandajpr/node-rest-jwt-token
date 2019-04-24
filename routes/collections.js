var express = require('express');
var router = express.Router();
const auth = require('../utils/auth')();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const collections = require('../controllers/collections');


// a simple test url to check that all of our files are communicating correctly.

router.post('/create', auth.authenticate(), collections.collections_create);

router.get('/:id', auth.authenticate(), collections.collections_details);

router.put('/:id/update', auth.authenticate(), collections.collections_update);

router.delete('/:id/delete', auth.authenticate(), collections.collections_delete);


module.exports = router;