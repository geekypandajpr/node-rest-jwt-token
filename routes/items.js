var express = require('express');
var router = express.Router();
const auth = require('../utils/auth')();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const items = require('../controllers/items');


// a simple test url to check that all of our files are communicating correctly.

router.post('/create', auth.authenticate(), items.items_create);

router.get('/:id', auth.authenticate(), items.items_details);

router.put('/:id/update', auth.authenticate(), items.items_update);

router.delete('/:id/delete', auth.authenticate(), items.items_delete);


module.exports = router;