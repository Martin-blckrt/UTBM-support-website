let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

router.get('/', async (req, res) => {

    const query = `SELECT id, name
                   FROM T_category
                   ORDER BY name`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));
});

module.exports = router
