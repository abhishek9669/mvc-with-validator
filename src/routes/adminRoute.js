const express = require('express');
const { adminController } = require('../controller/admin/adminController');

var adminRouter = express.Router();

adminRouter.get('/get_student',adminController)


exports.adminRouter=adminRouter;