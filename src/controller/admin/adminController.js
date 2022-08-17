const {mongoose} = require('../../config/db');
const { Cat } = require('../../models/cat');

var adminController = (req,res)=>{

    const kitty = new Cat({ name: req.query.name });
    kitty.save().then(() => console.log('done'));
    res.status(200).json({message:"hello"});
    
}

module.exports = {adminController}