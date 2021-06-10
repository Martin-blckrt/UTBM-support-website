let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();

//GET CATEGORY INFO
router.get('/:id', async (req, res) => {

    const query = `SELECT name
                   FROM T_category
                   WHERE id = ${req.params.id}`;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

router.get('/', async (req, res) => {

    const query = `SELECT id, name
                   FROM T_category;`

    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

//UPDATE CATEGORY
router.put('/', async (req, res) => {

    const checkQuery = `
        SELECT EXISTS(SELECT name from T_category WHERE name = '${req.body.newCategoryName}') as 'exists';`

    await db_manager.getDataDB(checkQuery)
        .then(results_db => {
                if (results_db[0].exists === 1) {
                    res.send({alreadyExist: 1})
                } else {
                    //IF NOT, update data
                    const query = `UPDATE T_category as a, (SELECT id FROM T_category WHERE name = '${req.body.categoryName}') as b
                                   SET a.name = '${req.body.newCategoryName}'
                                   WHERE a.id = b.id;`;
                    const insertData = async () => {
                        await db_manager.getDataDB(query)
                            .catch(err => console.error(err));
                    }
                    insertData()
                    res.end('Name modified')
                }
            }
        )
        .catch(err => console.error(err));

});

//DELETE CATEGORY
router.delete('/', async (req, res) => {

    //ALLOW to remove categories and all articles in this category.
    //TODO. Maybe check if the category exists before trying to remove

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

//CREATE CATEGORY
router.post('/', async (req, res) => {
    //check if the value already exists
    const checkQuery = `
        SELECT EXISTS(SELECT name from T_category WHERE name = '${req.body.categoryName}') as 'exists';`

    await db_manager.getDataDB(checkQuery)
        .then(results_db => {
                if (results_db[0].exists === 1) {
                    res.send({alreadyExist : 1})
                } else {
                    //IF NOT, insert data
                    const query = `INSERT INTO utbmSupport.T_category (name) VALUE ('${req.body.categoryName}')`;
                    const insertData = async  () => {
                        await db_manager.getDataDB(query)
                            .catch(err => console.error(err));
                    }
                    insertData()
                    res.end('Data inserted')
                }
            }
        )
        .catch(err => console.error(err));


});


module.exports = router
