//our root app component
import {Component} from '@angular/core'
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'my-app',
  directives: [InfiniteScroll],
  styles: [`
    .search-results {
      height: 100%;
      // overflow: scroll;
    }
    .title {
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,.5);
      color: white;
      width: 100%;
    }
  `],
  template: `
    <h1 class="title">Hello InfiniteScroll!<aside>items: {{sum}}</aside></h1>
    <div class="search-results"
         infinite-scroll
         [infiniteScrollDistance]="-1"
         (scrolled)="onScroll()">
      <p *ngFor="let i of array">
        {{i}}
      </p>
    </div>
  `
})
export class AppComponent {
  array = [];
  sum = 30;

  constructor() {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
  }

  onScroll () {
    console.log('scrolled!!');

    // add another 20 items
    const start = this.sum;
    this.sum += 5;
    for (let i = start; i < this.sum; ++i) {
      this.array.push(i);
    }
    
  }
}