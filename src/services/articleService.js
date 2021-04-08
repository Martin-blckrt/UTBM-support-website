import axios from 'axios';

const ARTICLE_API_BASE_URL = "http://localhost:8000/api/v1/articles";

class ArticleService {

    getArticle(){
        return axios.get(ARTICLE_API_BASE_URL);
    }

    createArticle(article){
        return axios.post(ARTICLE_API_BASE_URL, article);
    }

    getArticleByID(articleID){
        return axios.get(ARTICLE_API_BASE_URL + '/' + articleID);
    }

    updateArticle(article, articleID){
        return axios.put(ARTICLE_API_BASE_URL + '/' + article, articleID );
    }

    deleteArticle(articleID){
        return axios.delete(ARTICLE_API_BASE_URL + '/' + articleID);
    }

}

export default new ArticleService()
