var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectionSchema = new Schema({
    name: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Collections', CollectionSchema);