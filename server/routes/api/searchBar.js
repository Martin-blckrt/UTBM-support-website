let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

router.get('/category', async (req, res) => {

    const query = `SELECT DISTINCT c.id as idCategory, c.name
                   FROM T_category c
                            INNER JOIN T_article a ON c.id = a.idCategory
                   ORDER BY c.id`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));
});

router.get('/article', async (req, res) => {

        const query = `SELECT a.id as idArticle, a.articleTitle
                       FROM T_article a`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));
});

module.exports = router
