var Items = require('../models/items');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.items_create = function (req, res) {
    var items = new Items(
        {
            name: req.body.name,
            parentId: req.body.parentId
        }
    );

    items.save(function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'item Created successfully' });
    })
};

exports.items_details = function (req, res) {
    Items.findById(req.params.id, function (err, items) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "item": items });
    })
};

exports.items_update = function (req, res) {
    Items.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, Items) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": "Items udpated" });
    });
};

exports.items_delete = function (req, res) {
    Items.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send({ "result": 0, "error": new Error(err).message });
        }
        res.send({ "result": 1, "message": 'Deleted successfully!' });
    })
};