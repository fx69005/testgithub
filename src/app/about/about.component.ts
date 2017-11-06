import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

/* Model */
import {ArticleOrder} from '../core/model/article-order';
import {Order} from '../core/model/order'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  arrItems:any[] = [
    {ref: '123456', desc: 'sdazdaze', checked : 'true'},
    {ref: '123457', desc: 'sdazdaze', checked : 'true'},
    {ref: '123458', desc: 'sdazdaze', checked : 'true'},
    {ref: '123459', desc: 'sdazdaze', checked : 'true'},
    {ref: '123460', desc: 'sdazdaze', checked : 'true'},
    {ref: '123461', desc: 'sdazdaze', checked : 'true'},
  ]

  arrItems2:ArticleOrder[] = []

  articleOrder:ArticleOrder;
  order: Order;
  
  
  version: string = environment.version;
  constructor() {}
  ngOnInit() {
<<<<<<< b041ec22fc34b4c2fb3aa864355f3b9dc6e28e93
<<<<<<< a0495ac4589a7f1320b552497db680f533222acc
    let lol = "9";
    let lol2 = "10";
=======
    let lol = "20";
=======
    let lol = "30";
>>>>>>> lol30
    let lol2 = "2";
>>>>>>> lol20
  }
}
