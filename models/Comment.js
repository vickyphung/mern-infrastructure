const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const commentSchema = new Schema({
  date: { type: String, required: true, unique: false },
  comment: { type: String, required: true },
},
{
    timestamps: true
});

const comment = mongoose.model('comment', commentSchema)

module.exports = comment
