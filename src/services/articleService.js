import axios from 'axios';

const ARTICLE_API_BASE_URL = "http://localhost:8080/api/v1/articles";

class ArticleService {

    getArticle(){
        return axios.get(ARTICLE_API_BASE_URL);
    }

    createArticle(article){
        return axios.post(ARTICLE_API_BASE_URL, article);
    }

    updateArticle(article, articleID){
        return axios.put(ARTICLE_API_BASE_URL + '/' + article, articleID );
    }

}

export default new ArticleService()