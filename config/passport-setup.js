const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    console.log('user', user);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleid: profile.id}, function (currentUser) {
            if(currentUser){
                //already have the user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                //if not create in our db
                User.create(
                    ['username', 'googleid', 'thumbnail'],
                    [profile.displayName, profile.id, profile._json.image.url],
                    function(newUser) {
                        User.findById(newUser.insertId, function(user) {
                            console.log('new user created: ' + user);
                            done(null, user);
                        })
                    }
                );
            }
        });
    })
)

