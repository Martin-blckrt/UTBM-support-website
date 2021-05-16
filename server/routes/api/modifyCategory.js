let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();


router.get('/', async (req, res) => {

    const query = `UPDATE T_category as a, (SELECT id FROM T_category WHERE name = 'ComboxBox.value') as b
                   SET a.name = 'textZone.value'
                   WHERE a.id = b.id;`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
