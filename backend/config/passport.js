const passport = require('passport');
const strategy = require('passport-google-oauth20').Strategy;
const User = require('../Models/User');
require('dotenv').config();
passport.use(
    new strategy(
        {
            clientID : process.env.googleid,
            clientSecret : process.env.google_client_secret,
            // callbackURL : 'http://localhost:4000/api/v1/auth/google/callback',
            callbackURL : 'https://customer-service-app-z8n9.onrender.com/api/v1/auth/google/callback',
        },
        async (accessToken,refreshToken,profile,done) => {
            let existUser = await User.findOne({email: profile.emails[0].value});
            if(!existUser)
            {
                existUser = await User.create({
                    name  : profile.displayName, 
                    email : profile.emails[0].value,
                })
            }
            done(null,existUser);
        }
    )
)

passport.serializeUser((user,done) => done(null,user.id));
passport.deserializeUser(async (id,done) => {
    
    try {
       const existUser =  await User.findById(id);
       done(null,existUser);
    }catch(error)
    {
        done(error,null);
    }
});