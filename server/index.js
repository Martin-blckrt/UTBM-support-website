const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
const getArticlesOfCategory = require('./routes/api/getArticlesOfCategory');
const getCategory = require('./routes/api/getCategory')
const getArticleInfo = require('./routes/api/getArticleInfo')
const bodyParser = require('body-parser');

const app = express();

gatsby.prepare({app}, () => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())

    app.use('/api/getArticlesOfCategory', getArticlesOfCategory);
    app.use('/api/categories', getCategory);
    app.use('/api/getArticleInfo', getArticleInfo);
});


const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));
