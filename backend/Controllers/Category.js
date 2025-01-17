const Category = require('../Models/Category');

exports.addCategory = async (req,res) => {
    try {
        const {name,description} = req.body;

        if(!name || !description)
            {
                return res.status(404).json({
                    success : false,
                    message : 'give all details',
                })
            }

        let existCategory = await Category.findOne({name : name});

        if(existCategory)
        {
            return res.status(401).json({
                success : false,
                message : 'already added',
            })
        }

        existCategory = await Category.create({
            name,
            description,
        })


        return res.status(200).json({
            success : true,
            message : 'Category added',
            category : existCategory, 
        });
    }catch(e)
    {
        res.status(500).json({
            success : false,
            message : 'server down',
        });
    }
}
exports.getallCategories = async (req,res) => {
    try {
        
        let Categories = await Category.find({});

        return res.status(200).json({
            success : true,
            message : 'Category fetch',
            categories : Categories, 
        });
    }catch(e)
    {
        res.status(500).json({
            success : false,
            message : 'server down',
        });
    }
}