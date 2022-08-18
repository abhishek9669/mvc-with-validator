const express = require('express');
const { adminController } = require('../controller/admin/adminController');
const { friendValidator } = require('../validators/friend');

var adminRouter = express.Router();

adminRouter.get('/get_friend',friendValidator,adminController)


exports.adminRouter=adminRouter;