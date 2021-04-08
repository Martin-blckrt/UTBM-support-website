const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
const article = require('./article');
const bodyParser = require('body-parser');



const app = express();


gatsby.prepare({app}, () => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())

    app.use('/api/article', article);

});


const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));
