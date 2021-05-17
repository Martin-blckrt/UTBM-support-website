const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
const bodyParser = require('body-parser');

//API ROUTES IMPORT
const home = require('./routes/api/home');
const treeview = require('./routes/api/treeview');
const categories = require('./routes/api/categories');
const articles = require('./routes/api/articles');
const getArticlesOfCategory = require('./routes/api/getArticlesOfCategory');
const getArticleInfo = require('./routes/api/getArticleInfo');

const app = express();

gatsby.prepare({app}, () => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())

    app.use('/api/home', home);
    app.use('/api/treeview', treeview);

    app.use('/api/categories', categories);
    app.use('/api/articles', articles);

    app.use('/api/getArticlesOfCategory', getArticlesOfCategory);
    app.use('/api/getArticleInfo', getArticleInfo);


});

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Access the website : http://localhost:${port}`));
