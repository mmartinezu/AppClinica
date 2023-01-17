const mongoose = require('mongoose')
const schema = mongoose.Schema

const memberSchema = new mongoose.Schema({
    name:String,
    cmp:String,
    age:Number,
    title:String,
    university:String,
    speciality:String
})

module.exports = mongoose.model('members', memberSchema)