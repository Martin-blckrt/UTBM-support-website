let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

//TO SHOW TREEVIEW
router.get('/:id', async (req, res) => {

    const query = `SELECT a.articleTitle, c.name
                   FROM T_article a
                   INNER JOIN T_category c ON a.idCategory = c.id
                   WHERE a.id = ${req.params.id}`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

//GET ARTICLE TITLE
router.get('/', async (req, res) => {

    const query = `SELECT a.articleTitle, c.name
                   FROM T_article a
                   INNER JOIN T_category c ON a.idCategory = c.id
                   ORDER BY c.name`;

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
    //TODO. Check if the sent data are okay to be inserted (maybe in client side it's better)
    console.log("I've received the data ! : ", req.body)

    const query = `INSERT INTO T_article (articleTitle, idCategory, tldr, body)
                   VALUES ("${req.body.articleInformations.articleName}",
                           "${req.body.articleInformations.categoriesId}", 
                           "${req.body.articleInformations.tldr}",
                           "${req.body.articleInformations.body}")`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => res.end('unable to create article : ', err));

});

module.exports = router
