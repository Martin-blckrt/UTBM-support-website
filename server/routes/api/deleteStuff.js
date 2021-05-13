let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();


router.get('/category', async (req, res) => {

    const query = `DELETE
                   FROM t_category as a
                   WHERE a.id = (SELECT *
                                 FROM (
                                          SELECT b.id
                                          FROM t_category as b
                                          WHERE b.name = 'ComboBox.value') as c);`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

router.get('/article', async (req, res) => {

    const query = `DELETE
                   FROM t_article as a
                   WHERE a.id = (SELECT *
                                 FROM (
                                          SELECT b.id
                                          FROM t_article as b
                                          WHERE b.articleTitle = 'ComboBox.value') as c);`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
