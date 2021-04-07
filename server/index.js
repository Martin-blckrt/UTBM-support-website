const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
let dbconnection = require('./connectDB');


const app = express();

gatsby.prepare({ app }, () => {

    app.get('/api/v1/articles', ((req, res) => {

        const query = 'SELECT * FROM T_article'

    dbconnection.query(query, (error, results) => {
            if (error) {
                console.log('Warning : Cannot connect to the MySQL server. Error Code: ' + error.code);
                return;
            }

            //peut etre interessant d'envoyer notre reponse en mode JSON. Mais à voir si on peut pas trouver un moyen
            //d'utiliser Graphql pour recuperer les données de la base de données.

            res.json(results);

        });
    })
    )
});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));
