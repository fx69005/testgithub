import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

/* Model */
import {ArticleOrder} from '../core/model/article-order';
import {Order} from '../core/model/order';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  arrItems: any[] = [
    {ref: '123456', desc: 'sdazdaze', checked : 'true'},
    {ref: '123457', desc: 'sdazdaze', checked : 'true'},
    {ref: '123458', desc: 'sdazdaze', checked : 'true'},
    {ref: '123459', desc: 'sdazdaze', checked : 'true'},
    {ref: '123460', desc: 'sdazdaze', checked : 'true'},
    {ref: '123461', desc: 'sdazdaze', checked : 'true'},
  ]

  arrItems2: ArticleOrder[] = [];
  articleOrder: ArticleOrder;
  order: Order;
  version: string = environment.version;
  constructor() {}
  ngOnInit() {
    let lol = "1";
    let lol2 = "2";
    let lol3 = "3";

    let lol4 = "4";
    let lol5 = "5";
    let lol6 = "6";

    let lol7 = "7";
    let lol8 = "8";
    let lol9 = "9";
    let lol10 = "10";
    let lol10 = "11";
    let lol12 = "13";
  }
}
