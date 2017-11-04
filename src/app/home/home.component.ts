import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
  { id: 21, name: 'Chris'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  heroes = HEROES;
  selectedHero: Hero;
  constructor(private quoteService: QuoteService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {

    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'explicit' })
      .finally(() => { this.isLoading = false; })
      .subscribe((quote: string) => { this.quote = quote; });
  }
}
