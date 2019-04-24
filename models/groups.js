var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    name: {type: String, required: true},
    collectiondIds : [String]

});


// Export the model
module.exports = mongoose.model('Groups', GroupSchema);