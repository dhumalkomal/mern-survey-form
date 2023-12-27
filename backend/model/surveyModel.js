const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phoneNumber: Number,
  address: String,
  message: String,
}, {
    timestamps:true // Automatically add 'createdAt' and 'updatedAt' fields
});

// Create 'Survey' model based on the schema
const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;