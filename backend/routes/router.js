const express = require('express');
const router = express.Router();
// const Survey = require('../model/surveyModel');
const surveyController = require('../controllers/surveyController');

// router.get('/', surveyController.survey);

// POST endpoint to handle form submissions
router.post('/submit', surveyController.createSurvey);

// GET endpoint to retrieve all survey entries
router.get('/', surveyController.getAllSurveys);

//  to delete survey
router.delete('/:id' , surveyController.deleteSurvey)

// to update survey
router.put('/:id', surveyController.updateSurvey);

// Create a new survey
// router.post('/submit', surveyController.submit);

module.exports = router;