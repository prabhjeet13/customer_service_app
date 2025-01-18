const Request = require('../Models/RequestSchema');
const Intercom = require('intercom-client');
const User = require('../Models/User');
require('dotenv').config();

var client = new Intercom.Client({ token: process.env.intercom_token });

exports.addRequest = async (req,res) => {
    try {
        const {userId,additionalComments,category} = req.body;
         
        if(!userId || !additionalComments || !category)
        {
                return res.status(404).json({
                    success : false,
                    message : 'give all details',
                });
        } 

        const request = await Request.create({
            user : userId,
            additionalComments,
            category,
        })
        
        const userdetails = await User.findById({_id : userId});
    
        const intercom_user = {
          email: userdetails.email,
          name: userdetails.name,
          custom_attributes: {
            request_category: category,
            additionalComments: additionalComments,
            status : 'request submitted',
            message : `${additionalComments}`
          }
        };
        
        await client.users.create({ user: intercom_user })
        .then((response) => {
            console.log('User created in Intercom.com:', response);
        })
        .catch((e) => {
            console.error('Error in sending to Intercom:', e.message);
        });

        res.status(200).json({
            success : true,
            message : 'Request added',
            request : request, 
        });


    }catch(e)
    {
        res.status(500).json({
            success : false,
            message : 'server down',
        });
    }
}

