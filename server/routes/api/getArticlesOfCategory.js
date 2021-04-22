let express = require('express');
let router = express.Router();
const DBmanager = require('../../database/db-manager')

const db_manager = new DBmanager();

/*
* Router that manage the API calls to 'getArticlesOfCategory' use in the Show Articles inCategorie file.
* */

router.get('/', async (req, res) => {
    let query;
    if (req.query.id === 'article') {
        query = `SELECT articleTitle
                 FROM T_article
                 WHERE id = ${req.query.idArticle}`;
    } else {
        query = `SELECT articleTitle, tldr, id
                 FROM T_article
                 WHERE idCategory = ${req.query.idCategory}`;
    }


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
