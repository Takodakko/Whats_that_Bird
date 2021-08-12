const fs = require('fs');
const { Pool } = require('pg');
const path = require('path');
const PGURI = 'postgres://nspclpdm:eqLRhrWRtciRNdxT6tVCvMNxB6poyg-7@chunee.db.elephantsql.com/nspclpdm';
const pool = new Pool({
    connectionString: PGURI,
  });
  const db = {
      query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}

const formController = {

    newSubmission: (req, res, next) => {
            //console.log(req, 'req')
            const newBird = req.body;
            //console.log(newBird, "newBird");
            const bodyProps = [newBird.userName, newBird.date, newBird.birdColor, newBird.location, newBird.otherDescription];
            const formSubmit = 'INSERT INTO sightings (username, postdate, birdcolor, location, otherdescription) VALUES ($1, $2, $3, $4, $5);';
            db.query(formSubmit, bodyProps)
            .then(data => {
                //console.log(data, "data")
                return res.locals.newBird = data;
            })
            .then(() => next)
            .catch((err) => {
                res.send("ERROR");
            })
        
      
    },
    getBirds: (req, res, next) => {
        const formSubmit = 'SELECT * FROM sightings;';
        db.query(formSubmit)
            .then(data => {
                //console.log(data.rows, "data.rows")
                res.locals.birdlist = data.rows;
            })
            .then(() => next())
            .catch((err) => {
                res.send("ERROR");
            })
    }
};

module.exports = formController;