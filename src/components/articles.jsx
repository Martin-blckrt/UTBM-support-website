import React, {Component} from "react";
import ArticleService from '../services/articleService'

export default class ListArticleComponent extends Component {
    constructor(props) {
        super(props);
        //https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

        this.state = {
                articles: []
        }
        this.addArticle = this.addArticle.bind(this);
        this.editArticle = this.editArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    deleteArticle(id){
        ArticleService.deleteArticle(id).then( res => {
            this.setState({articles: this.state.articles.filter(articles => article.id !== id)});
        });
    }

    viewArticle(id){
        this.props.history.push(`/view-article/${id}`);
    }

    editArticle(id){
        this.props.history.push(`/add-article/${id}`);
    }

    componentDidMount(){
        ArticleService.getArticle().then((res) => {
            this.setState({ employees: res.data}); //TODO. change this point
        });
    }

    addArticle(){
        this.props.history.push(`/add-article/_add`);
    }

    render(){
        return (
            <div>
                <h2 className="text-center">Articles List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addArticle}>AddArticle</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Article Title</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.articles.map(
                                    article =>
                                        <tr key = {article.id}>
                                            <td>{article.title}</td>
                                            <td>
                                                <button onClick={ () => this.editArticle(article.id)} className="btn btn-info">Update</button>
                                                <button style={{marginLeft: "10px"}} onClick{ () => this.deleteArticle(article.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick{ () => this.viewArticle(article.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>


        )
    }
}
