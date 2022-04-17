import mongoose from "mongoose";

const Car = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    size : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

export default mongoose.model('Cars', Car)