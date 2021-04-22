let express = require('express');
let router = express.Router();
const DBmanager = require('../../database/db-manager')

const db_manager = new DBmanager();

router.get('/', async (req, res) => {
    let query = `SELECT a.id,
                        a.articleTitle, 
                        group_concat(distinct d.subtitle order by d.id)   as subtitle,
                        group_concat(distinct d.subsection order by d.id) as subsection,
                        group_concat(distinct p.type)                     as type
                 FROM T_article a
                          INNER JOIN T_articles_description ad ON a.id = ad.idArticle
                          INNER JOIN T_description d ON d.id = ad.idDescription
                          INNER JOIN T_articles_people ap ON a.id = ap.idArticle
                          INNER JOIN T_people p ON p.id = ap.idPeople
                 WHERE a.id = ${req.query.idArticle}`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
