const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
const bodyParser = require('body-parser');

//API ROUTES IMPORT
const getArticlesOfCategory = require('./routes/api/getArticlesOfCategory');
const categories = require('./routes/api/categories');
const home = require('./routes/api/home');
const getArticleInfo = require('./routes/api/getArticleInfo');
const treeview = require('./routes/api/treeview');
const articles = require('./routes/api/articles');
const deleteStuff = require('./routes/api/deleteStuff');
const modifyCategory = require ('./routes/api/modifyCategory');
const createStuff = require('./routes/api/createStuff');

const app = express();

gatsby.prepare({app}, () => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())

    app.use('/api/home', home);
    app.use('/api/treeview', treeview);
    app.use('/api/getArticlesOfCategory', getArticlesOfCategory);
    app.use('/api/categories', categories);
    app.use('/api/getArticleInfo', getArticleInfo);
    app.use('/api/articles', articles);
    app.use('/api/deleteStuff', deleteStuff);
    app.use('/api/createStuff', createStuff);
    app.use('/api/modifyCategory', modifyCategory)
});


const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`listening on port ${port}`));
