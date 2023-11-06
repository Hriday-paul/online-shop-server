const order = require("../model/orderModel");

//handle upload user order

const uploadOrder = async (req, res) => {
    try {
        const email = req.query.email;
        const orderInfo = req.body;
        const query = { email }
        const options = { upsert: true };
        const updateInfo = {
            $set: orderInfo
        }
        const data = await order.updateOne(query, updateInfo, options);

        res.send({
            status: true,
            message: "Order successfully",
            data
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }
}

//get all order
const allOrder = async (req, res) => {
    try {
        const datas = await order.find({}).sort({ isPending: 1 })
        res.send({
            status: true,
            message: "user order get successfully",
            datas
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }
}

// get order user wise
const getUserOrder = async (req, res) => {
    try {
        const query = { email: req.query.email };
        const datas = await order.findOne(query);

        res.send({
            status: true,
            message: "user order get successfully",
            datas
        })
    }
    catch (err) {
        res.send({
            status: false,
            message: err.message,
            error: err
        })
    }
}

module.exports = {
    uploadOrder,
    getUserOrder,
    allOrder
}