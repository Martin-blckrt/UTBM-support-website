let dbconnection = require('./connectDB');
let express = require('express');

var router = express.Router();

const getDataDB = (query) => new Promise((resolve) => {

    dbconnection.query(query, (err, results_db) => {

        if (err) console.error("error db =", err);

        resolve(results_db);

    });
});

router.get('/', async (req, res) => {

    const query = 'SELECT * FROM T_article'

    await getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});


module.exports = router