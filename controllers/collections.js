var Collections = require('../models/collections');
//Simple version, without validation or sanitation

exports.collections_create = function (req, res) {
    const collections = new Collections({
        name: req.body.name
    }
    );

    collections.save(function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'collections Created successfully' });
    });
};

exports.collections_details = function (req, res) {
    Collections.findById(req.params.id, function (err, collections) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "collections": collections });
    });
};

exports.collections_update = function (req, res) {
    Collections.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, collections) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'collections udpated' });
    });
};

exports.collections_delete = function (req, res) {
    Collections.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'Deleted successfully!' });
    });
};