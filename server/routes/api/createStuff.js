let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();


router.get('/category', async (req, res) => {

    const query = `INSERT INTO t_category (name)
                       VALUE ('TextZone.value')`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

router.get('/article', async (req, res) => {

    const query = ``;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
