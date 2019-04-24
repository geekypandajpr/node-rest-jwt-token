var Groups = require('../models/groups');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.groups_create = function (req, res) {
    var groups = new Groups({
        name: req.body.name,
        collectiondIds: req.body.collectiondIds
    }
    );

    groups.save(function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'groups Created successfully' });
    });
};

exports.groups_details = function (req, res) {
    Groups.findById(req.params.id, function (err, groups) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "group": groups });
    })
};

exports.groups_update = function (req, res) {
    Groups.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, groups) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": "groups udpated" });
    });
};

exports.groups_delete = function (req, res) {
    Groups.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'Deleted successfully!' });
    });
};