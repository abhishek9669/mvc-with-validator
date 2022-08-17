const {mongoose} = require("../config/db")

const Cat = mongoose.model('Cat', { name: String });
module.exports ={Cat}

