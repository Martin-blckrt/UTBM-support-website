let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

/*THIS ROUTE ALLOWS TO GET THE TITLE OF AN ARTICLE*/

router.get('/', async (req, res) => {

    const query = `SELECT articleTitle
                   FROM T_article`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
