const Survey = require('../model/surveyModel');

// Create a new survey entry
// createSurvey: async (req, res) => {
 module.exports.createSurvey =  async (req, res) => {
    try {
    //   const {name,gender,nationality,email,phoneNumber,address,message} = req.body;

    //   if (!name || !email || !message) {
    //     return res.status(400).json({ error: 'Invalid request. Missing required fields.' });
    //   }
      // Validate and save the survey data to MongoDB
      const survey = new Survey({
        name : req.body.name, 
        gender : req.body.gender, 
        nationality : req.body.nationality, 
        email : req.body.email, 
        phoneNumber : req.body.phoneNumber, 
        address : req.body.address, 
        message : req.body.message
      });
      await survey.save();
            // console.log('Retrieved Surveys:', req.params.name);

      res.json({ message:'New Survey Created Successfully'})

    //   res.status(201).json({ message: 'Survey submitted successfully!' });
    } catch (error) {
      console.error('Error submitting survey:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Retrieve all survey entries
  module.exports.getAllSurveys= async (req, res) => {
    try {
      const surveys = await Survey.find();
    //   console.log('Retrieved Surveys:', surveys);
      res.status(200).json(surveys);
    } catch (error) {
      console.error('Error fetching surveys:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // function to delete a product using it's ID
module.exports.deleteSurvey =async function (req, res) {
  try {
    const result = await Survey.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.send({
        message: "Survey deleted",
      });
    } else {
      res.status(404).send({
        message: "Survey not found",
      });
    }
  } catch (error) {
    console.error('Error deleting survey:', error);
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
};

// Function to update a survey using its ID
module.exports.updateSurvey = async function (req, res) {
  try {
    const existingSurvey = await Survey.findById(req.params.id);

    if (!existingSurvey) {
      return res.status(404).send({
        message: "Survey not found",
      });
    }

    const result = await Survey.updateOne({ _id: req.params.id }, { $set: req.body });

    if (result.nModified > 0) {
      res.send({
        
        message: "Survey updated successfully",
      });
    }else {
      res.send({
        message: "No changes were made to the survey",
      });
    }

  } catch (error) {
    console.error('Error updating survey:', error);
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
};


  // Other controller methods as needed (e.g., updateSurvey, deleteSurvey, etc.)













module.exports.survey = async function(req, res) {
    try{

        const foundSurvey = await Survey.find({});// Use await to handle the promise
        res.send(foundSurvey);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
};

// module.exports.submit =async function(req, res){
//     try {
       
//         const survey = new Survey({ 
//             name : req.body.name, 
//             email: req.body.email
//          });

//         await product.save();
//         // res.json({ product });
//         res.json({ message:'New Survey Created Successfully'})
//     } 
//     catch (err) {
//         res.status(500).json({ error: err.message });
//     }   
// };
