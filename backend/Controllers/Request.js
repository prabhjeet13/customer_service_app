const Request = require('../Models/RequestSchema');
const Intercom = require('intercom-client');
require('dotenv').config();

const client = Intercom.Client({ token: process.env.intercom_token });
client.useRequestOpts({
    headers : {'Intercom-version': 1.2}
})

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

        const userdetails = await User.findById(userId);

        const intercom_user = {
          email: userdetails.email,
          name: userdetails.name,
          custom_attributes: {
            request_category: category,
            additionalComments: additionalComments,
          }
        };

        await client.users.createOrUpdate({ user: intercom_user })
        .then((response) => {
            console.log('User updated or created in Intercom.com:', response);
        })
        .catch((e) => {
            console.error('Error in sending to Intercom:', e.message);
        });

        const current_event = {
            event_name: 'request_submitted',
            userId: userId,
            created_at: Math.floor(Date.now() / 1000),
            metadata: {
              category: category,
              additionalComments: additionalComments,
            },
        };
      
        await client.events.create(current_event)
        .then(response => {
              console.log('Event is tracked in Intercom.com:', response);
        })
        .catch((e) => {
              console.error('Error tracking event in Intercom:', e.message);
        });

        return res.status(200).json({
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

