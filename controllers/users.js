const config = require('../config');
const Users = require('../models/users');
const jwt = require('jsonwebtoken');

//Simple version, without validation or sanitation
exports.login = function (req, res) {
        Users.findOne({ email: req.body.email }, function (err, doc) {
                console.log('doc',doc)
                if (doc) {
                        var user = { 'email' : doc.email}
                        var token = jwt.sign(user, config.getSecretKey());
                        res.send({ 'result': 1, 'token': token });
                } else {
                        res.send({ 'result': 0, 'message': 'Invalid Email id' });
                }
        });
};

exports.user_create = function (req, res) {
        var users = new Users(
                {
                        email: req.body.email,
                        roles: req.body.roles
                }
        );

        users.save(function (err) {
                if (err) {
                        res.send({ "result": 0, "error": new Error(err).message });
                }
                res.send({ "result": 1, "message": 'user Created successfully' });
        });

};

exports.user_details = function (req, res) {
        Users.findById(req.params.id, function (err, user) {
                if (err) {
                        res.send({ "result": 0, "error": new Error(err).message });
                }
                res.send({ "result": 1, "user": user });
        })
};

exports.user_update = function (req, res) {
        Users.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, Users) {
                if (err) {
                        res.send({ "result": 0, "error": new Error(err).message });
                }
                res.send({ "result": 1, "message": "user udpated" });
        });
};

exports.user_delete = function (req, res) {
        Users.findByIdAndRemove(req.params.id, function (err) {
                if (err) {
                        res.send({ "result": 0, "error": new Error(err).message });
                }
                res.send({ "result": 1, "message": 'Deleted successfully!' });
        });
};


exports.getByEmail = function (email, callback) {
        console.log('email',email)
        Users.findOne({ email: email }, callback);
};