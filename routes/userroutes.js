const express=require('express');
const userrouter=express.Router();
const usercontroller=require('../controllers/usercontroller');
const auth=require('../middleware/auth');

userrouter.get('/checkAuth', userController.checkAuth);

userrouter.post('/register',usercontroller.register);

userrouter.post('/login',usercontroller.login);

userrouter.get('/logout',auth.verifytoken,usercontroller.logout);

userrouter.get('/profile',auth.verifytoken,usercontroller.getprofile);

userrouter.put('/profile',auth.verifytoken,usercontoller.updateprofile);

userrouter.delete('/profile',auth.verifytoken,usercontroller.deleteprofile);

userrouter.get('/admin/users',auth.verifytoken,auth.isadmin,usercontroller.getusers);
userrouter.get('/admin/users/:id',auth.verifytoken,auth.isadmin,usercontroller.getuser);
userrouter.put('/admin/users/:id',auth.verifytoken,auth.isadmin,usercontroller.updateuser);
userrouter.delete('/admin/users/:id',auth.verifytoken,auth.isadmin,usercontroller.deleteuser);


module.exports=userrouter;