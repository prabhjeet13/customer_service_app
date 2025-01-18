// google routes
const express = require('express');
const router = express.Router();
const passport = require('passport');
const {googleCallbackControll} = require('../Controllers/Auth');

const REDIRECT_URI = 'https://customer-service-app-z8n9.onrender.com/api/v1/auth/google/callback';
router.get('/google',
    (req,res) => {
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.googleid}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile`;
        res.redirect(authUrl);
    }
);
router.get('/google/callback',passport.authenticate('google',{session:false}),googleCallbackControll);


module.exports = router;