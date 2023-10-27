const mongoose = require("mongoose");
const {URL}=require ("./server_config")

const connect = async () => {
    await mongoose.connect('mongodb+srv://mailmeaj10:Aman%401234@cluster0.2u0cs9c.mongodb.net/')
}

module.exports = connect;