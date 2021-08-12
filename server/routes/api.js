//const { ModuleFilenameHelpers } = require('webpack');
const formController = require('../formController.js');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')))

router.post('/', 
    formController.newSubmission,
    (req, res) => res.status(200).json(res.locals.newBird)
)

router.get('/getBirds',
    formController.getBirds,
    (req, res) => res.status(200).json(res.locals.birdlist))

module.exports = router;