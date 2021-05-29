let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

//TO SHOW TREEVIEW
router.get('/:id', async (req, res) => {
    console.log(req.params)
    const query = `SELECT idCategory, articleTitle, tldr, content
                   FROM T_article
                            INNER JOIN T_category c ON T_article.idCategory = c.id
                   WHERE T_article.id = ${req.params.id}`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

//GET ARTICLE TITLE
router.get('/', async (req, res) => {

    const query = `SELECT a.articleTitle, a.id, c.name
                   FROM T_article a
                            INNER JOIN T_category c ON a.idCategory = c.id
                   ORDER BY c.name`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});


//UPDATE ARTICLEMoodle
router.put('/', (req, res) => {
    console.log('req data : ', req.body)
    const query = `UPDATE T_article as a, (SELECT id FROM T_article WHERE id = '${req.body.articleId}') as b
                   SET a.articleTitle = '${req.body.articleInformation.articleTitle}', 
                        a.idCategory = ${req.body.articleInformation.categoriesId},
                        a.tldr = '${req.body.articleInformation.tldr}',
                        a.content = '${req.body.articleInformation.content}'
                   WHERE a.id = b.id`;

    const modifyDB = async () => {
        await db_manager.getDataDB(query)
            .catch(err => console.error(err));
    }
    modifyDB()
    res.end('Article informations modified')
})

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

    const query = `INSERT INTO T_article (articleTitle, idCategory, tldr, content)
                   VALUES ('${req.body.articleInformation.articleTitle}',
                           '${req.body.articleInformation.categoriesId}',
                           '${req.body.articleInformation.tldr}',
                           '${req.body.articleInformation.content}')`;

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => res.end('unable to create article : ', err));

});

module.exports = router
