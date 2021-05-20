let express = require('express');
let router = express.Router();
const DBmanager = require('../../database/db-manager')

const db_manager = new DBmanager();

router.get('/', async (req, res) => {
    let query = ``;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
