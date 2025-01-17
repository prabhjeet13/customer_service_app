const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.googleCallbackControll = (req, res) => {
  try {

    const {code} = req.query;
    if (!code) {
        return res.status(400).json({ message: 'Authorization code is missing' });
    }
    const payload = {
        userid : req.user._id,
        email : req.user.email,
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: '1d' });
    
    res.redirect(`http://localhost:3000/request-form/${req.user.id}/${req.user.email}/${token}`);

  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: 'Internal Server Error' 
    });
  }
};

