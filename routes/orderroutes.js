const express=require('express');
const orderrouter=express.router();
const ordercontroller=require('../controllers/ordercontroller');
const auth=require('../middleware/auth');

orderrouter.post('/',auth.verifytoken,ordercontroller.createorder);

orderrouter.get('/',auth.verifytoken,auth.isadmin,ordercontroller.getallorders);

orderrouter.get('/:id',auth.verifytoken,auth.isadmin,ordercontroller.getorderbyid);

orderrouter.put('/:id',auth.verifytoken,auth.isadmin,ordercontroller.updateorder);

orderrouter.delete('/:id',auth.verifytoken,auth.isadmin,ordercontroller.deleteorder);

module.exports=orderrouter;