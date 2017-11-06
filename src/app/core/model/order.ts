import {ArticleOrder} from '../model/article-order';

export class Order {
    //id:number;
    articleListOrder: ArticleOrder[];
    comment:string;

    constructor(articleList: ArticleOrder[], commentaire:string){
        this.comment = commentaire;
        this.articleListOrder = articleList;
    }
}
