//const { ModuleFilenameHelpers } = require('webpack');
const formController = require('../formController.js');
const express = require('express');
const router = express.Router();

router.put('/newSubmission',
  formController.newSubmission,
  (req, res) => res.status(200).json(...res.locals.newBird)
)

module.exports = 'apirouter';