let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();


router.post('/category', async (req, res) => {

    //ALLOW to remove categories and all articles in this category.
    //TODO. Maybe check if the category exists before trying to remove

    console.log("category : ", req.body.categoryName);
    const query = `DELETE
                   FROM T_category as a
                   WHERE a.id = (SELECT *
                                 FROM (
                                          SELECT b.id
                                          FROM T_category as b
                                          WHERE b.name = '${req.body.categoryName}') as c);`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

router.get('/article', async (req, res) => {

    const query = `DELETE
                   FROM T_article as a
                   WHERE a.id = (SELECT *
                                 FROM (
                                          SELECT b.id
                                          FROM T_article as b
                                          WHERE b.articleTitle = '${req.body.articleName}') as c);`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
