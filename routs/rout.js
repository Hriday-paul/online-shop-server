const express = require("express");
const { getData, postData, demoControler, getPhoto, getCategoryProduct, getSingleProduct, addToCart, userGetCart, deleteCart, createUser, getuser, updateUser, updateUserPass, getAllDataLength, getCategoryDataLength } = require("../controler/controler");
const router = express.Router();
const path = require("path");
var bodyParser = require('body-parser')
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.get("/categoryAll/:pageNum", getData);

//get all datas length 

router.get("/allDataLength", getAllDataLength);

//get single product
router.get("/product/:id", getSingleProduct)

//upload.single('imageFile'),
router.post("/postData", postData);

//get single photo
router.get("/getImage/:id", getPhoto)

//get category wise product
router.get("/category/:categoryName/:pageNum", getCategoryProduct)

//category product length
router.get("/categoryDataLength/:categoryName", getCategoryDataLength)
// add to cart
router.put("/addCart", addToCart)

//get user added cart
router.get("/getCart/:email", userGetCart)

//delete add to cart product
router.delete("/deleteCart/:id", deleteCart)



//handle user

//create user
router.post("/createUser", createUser)

//get user
router.get("/getuser", getuser)

//update user info 
router.put("/updateUser", updateUser)

//update user password
router.put("/updatePassword", updateUserPass)

module.exports = router;