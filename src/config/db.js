const mongoose = require('mongoose');
const env = require('dotenv');
env.config();
mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@${process.env.MONGOOSE_DB}/?retryWrites=true&w=majority`)
.then((s)=>{
    console.log("coonected")

}).catch((error)=>{
    console.log(error)
});

exports.mongoose = mongoose;