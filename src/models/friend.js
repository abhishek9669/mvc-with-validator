const {mongoose} = require("../config/db")


let friendSchema = { 
    name: String,
    surname: String 
};

const friend = mongoose.model('Friend',friendSchema);

module.exports ={friend}

