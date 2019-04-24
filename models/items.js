var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: {type: String, required: true, max: 100},
    parentId: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Items', ItemSchema);