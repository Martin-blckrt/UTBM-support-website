let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

router.get('/', async (req, res) => {

    let query;

    if (req.query.id === 'home'){
        query = 'SELECT c.name, GROUP_CONCAT(a.titre) as titles FROM T_categorie c INNER JOIN T_article a ON c.id = a.idCategorie GROUP BY c.name, c.id ORDER BY c.id DESC';
    }
    else {
        query = `SELECT name FROM T_categorie where id = ${req.query.id}`;
    }

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router