const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });

app.put('/newSubmission', (req, res) => {
    formController.newSubmission

})

app.listen(3000);