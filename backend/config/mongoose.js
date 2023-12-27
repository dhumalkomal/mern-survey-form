// Import the Mongoose library for MongoDB
const mongoose=require('mongoose');

// Define the MongoDB connection URI
  // Connection URL for the MongoDB database
 const mongoURL= 'mongodb+srv://habit:habit123@cluster0.krqzlcy.mongodb.net/habits-tracker?retryWrites=true&w=majority';

// Get the default connection
const db =  mongoose.connection;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// Export the database connection to make it available for use in other files
module.exports= db;

