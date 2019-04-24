const passport = require("passport");  
const passportJWT = require("passport-jwt");  
const config = require('../config');
const userController = require('../controllers/users');
const ExtractJwt = passportJWT.ExtractJwt;  
const Strategy = passportJWT.Strategy;  
const jwtOptions = {  
    secretOrKey: config.getSecretKey(),
    jwtFromRequest: ExtractJwt.fromHeader('authorization')
};



module.exports = function() {
    var strategy = new Strategy(jwtOptions, function(payload, callback) {
        console.log('payload',payload)
        userController.getByEmail(payload.email,function(err,result) {
            console.log('result',result);
            if (result) {
                return callback(null,result);
            } else {
                return callback(new Error("User not found"), null);
            }
        });
    });
    passport.use(strategy);

    passport.serializeUser(function(user, done) {
        done(null, user);
    });
      
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", false);
        }
    };
};

