const {mongoose} = require('../../config/db');
const { Cat } = require('../../models/cat');

var adminController = (req,res)=>{

    const kitty = new Cat({ name: req.query.name });
    kitty.save().then(() => {
        res.status(200).json({
            'msg':"done"
        });
    }).catch(e=>{
        res.status(400).json({
            'msg':"error",
           
        });
    });

    
}

module.exports = {adminController}