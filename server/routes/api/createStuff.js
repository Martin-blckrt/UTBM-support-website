let express = require('express');
const DBmanager = require('../../database/db-manager');
let router = express.Router();

const db_manager = new DBmanager();


router.post('/category', async (req, res) => {
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
router.post('/article', async (req, res) => {

    const query = ``;


    await db_manager.getDataDB(query)
        .then(results_db => res.send(results_db))
        .catch(err => console.error(err));

});

module.exports = router
