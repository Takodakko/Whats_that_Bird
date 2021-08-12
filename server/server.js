const path = require('path');
const express = require('express');
const app = express();
const apirouter = require('./routes/api.js');
// const formController = require('./formController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/sightings', apirouter)

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'));
});
app.get('/getBirds', apirouter)

//app.delete('/deleteEntry', apirouter)



// app.post('/sightings', formController.newSubmission, (req, res) => {
//     return res.status(200).send("Submission Made")
// });

app.use((req, res) => {
    return res.status(404).send('Page not found');
  });

  app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(3000);