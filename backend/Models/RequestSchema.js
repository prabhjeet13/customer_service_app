const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required :true,
    },
    additionalComments : {
        type : String,
        required : true,
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :true,        
    }
});

module.exports = mongoose.model('Request',RequestSchema);
