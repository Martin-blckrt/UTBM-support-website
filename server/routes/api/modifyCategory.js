let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();


router.post('/', async (req, res) => {

    const checkQuery = `
        SELECT EXISTS(SELECT name from T_category WHERE name = '${req.body.newCategoryName}') as 'exists';`

    await db_manager.getDataDB(checkQuery)
        .then(results_db => {
                if (results_db[0].exists === 1) {
                    res.send({alreadyExist: 1})
                } else {
                    //IF NOT, insert data
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

module.exports = router
