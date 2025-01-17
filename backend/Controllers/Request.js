const Request = require('../Models/RequestSchema');

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

