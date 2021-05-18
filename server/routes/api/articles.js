let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

//GET ARTICLE TITLE
router.get('/', async (req, res) => {

    const query = `SELECT articleTitle
                   FROM T_article`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

//UPDATE ARTICLE
//TODO.

//DELETE ARTICLE
router.delete('/', async (req, res) => {

    const query = `DELETE
                   FROM T_article as a
                   WHERE a.id = (SELECT *
                                 FROM (
                                          SELECT b.id
                                          FROM T_article as b
                                          WHERE b.articleTitle = "${req.body.articleName}") as c);`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

//CREATE ARTICLE
router.post('/', async (req, res) => {
    //TODO. à remplir
    console.log("I've received the data ! : ", req.body)
    const query = ``;

    /*await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => res.end('unable to create article : ', err));*/

});

module.exports = router
