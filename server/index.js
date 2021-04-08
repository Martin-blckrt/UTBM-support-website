const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
let dbconnection = require('./connectDB');


const app = express();


const query = 'SELECT * FROM T_article'

const getArticle = () => new Promise((resolve) => {
    dbconnection.query(query, (err, results_db) => {

        if (err) console.error("error db =", err);

        console.log("results = ", results_db);
        resolve(results_db);

    });
});


gatsby.prepare({app}, () => {

    app.get('/api/articles', async (req, res) => {
        //TODO. Check : https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js

        await getArticle()
            .then(results_db => res.send(results_db))
            .catch(err => console.error(err));

    })

});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));
