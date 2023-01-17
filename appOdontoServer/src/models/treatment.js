const mongoose = require('mongoose')
const schema = mongoose.Schema

const treatmentSchema = new mongoose.Schema({
    name:String,
    description:String
})

module.exports = mongoose.model('treatments', treatmentSchema)