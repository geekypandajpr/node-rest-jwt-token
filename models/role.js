var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    role    : { type: String, enum: ['regular', 'manager', 'globalManager'] },
    groupId : { type: String },
});


// Export the model
module.exports = mongoose.model('Roles', RoleSchema);