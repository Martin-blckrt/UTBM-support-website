let express = require('express');
let router = express.Router();
const DBmanager = require('../../database/db-manager')

const db_manager = new DBmanager();

router.get('/', async (req, res) => {

    let query;
    if (req.query.id === 'article'){
        query = `SELECT articleTitle FROM T_article WHERE id = ${req.query.idArticle}`;
    }
    else {
        query = `SELECT articleTitle, tldr FROM T_article WHERE idCategory = ${req.query.idCategory}`;
    }


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

router.post('/', async (req, res) => {
    let response = {
        title:req.body.title
    };
    console.log(response);
    res.end("I've got the data!");
    db_manager.insertDataDB();
});

module.exports = router
