const express=require('express');
const cartrouter=express.router();
const cartcontroller=require('../controllers/cartcontroller');
const auth=require('../middleware/auth');

cartrouter.post('/add',auth.verifytoken,cartcontroller.additems);
cartrouter.get('/',auth.verifytoken,cartcontroller.getcart);
cartrouter.put('/update',auth.verifytoken,cartcontroller.updatecart);
cartrouter.delete('/delete',auth.verifytoken,cartcontroller.deletecart);
cartrouter.post('/remove',auth.verifytoken,cartcontroller.removeitem);

module.exports=cartrouter;