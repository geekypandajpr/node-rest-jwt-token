var Role = require('../models/role');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.role_create = function (req, res) {
    var role = new Role(
        {
            role: req.body.role,
            groupId: req.body.groupId
        }
    );

    role.save(function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'role Created successfully' });
    })
};

exports.role_details = function (req, res) {
    Role.findById(req.params.id, function (err, role) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "Role": role });
    })
};

exports.role_update = function (req, res) {
    Role.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, Role) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": "Role udpated" });
    });
};

exports.role_delete = function (req, res) {
    Role.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'Deleted successfully!' });
    })
};