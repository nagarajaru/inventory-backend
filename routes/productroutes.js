const express=require('express');
const productcontroller=require('../controllers/productcontrollers');
const productrouter=express.Router();
const auth=require('../middleware/auth');
const upload=require('../middleware/multer');

productrouter.post('/',auth.verifytoken,auth.isadmin,productcontroller.createproduct);
productrouter.get('/',auth.verifytoken,productcontroller.getallproducts);
productrouter.get('/:id',auth.verifytoken,productcontroller.getproductbyid);
productrouter.put('/:id',auth.verifytoken,auth.isadmin,productcontroller.updateproduct);
productrouter.delete('/:id',auth.verifytoken,auth.isadmin,productcontroller.deleteproduct);

module.exports=productrouter;
