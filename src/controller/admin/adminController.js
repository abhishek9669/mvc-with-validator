const {mongoose} = require('../../config/db');
const { friend } = require('../../models/friend');
const { validationResult } = require('express-validator');

var adminController = (req,res)=>{

    let data = {
        name: req.query.name,
        surname:req.query.surname
    }

    let error = validationResult(req);

    if (error.isEmpty()) {
        const frieendObj = new friend(data);
        frieendObj.save().then(() => {
            res.status(200).json({
                'msg':"done"
            });
        }).catch(e=>{
            res.status(400).json({
                'msg':"error",
               
            });
        });

    }else{
        res.status(400).json({
            'msg':"name and surname is requird ",
           
        });

    }
  

    
}

module.exports = {adminController}