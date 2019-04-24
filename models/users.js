var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email    : { type: String, required: true },
    roles   : [Schema.Types.ObjectId],
});


// Export the model
module.exports = mongoose.model('Users', UserSchema);