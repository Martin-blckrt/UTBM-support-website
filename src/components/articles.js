import React, {Component} from "react";
import Article from "../pages/article";

export default class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        //https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html
        //TODO. finir en se basant la dessus et en mettant les infos qu'il faut au bon endroit.

        this.state = {

        }
    }
    componentDidMount(){
        Article.getArticle().then((res) => {
            this.setState({ employees: res.data}); //TODO. change this point
        });
    }

}