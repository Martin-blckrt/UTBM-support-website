let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

router.get('/', async (req, res) => {

    const query = `SELECT c.id, c.name, GROUP_CONCAT(a.articleTitle) as titles, GROUP_CONCAT(a.id) as idArticles
                   FROM T_category c
                            INNER JOIN T_article a ON c.id = a.idCategory
                   GROUP BY c.name, c.id
                   ORDER BY c.name`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));
});


module.exports = router
