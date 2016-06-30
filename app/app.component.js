"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//our root app component
var core_1 = require('@angular/core');
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var AppComponent = (function () {
    function AppComponent() {
        this.array = [];
        this.sum = 30;
        for (var i = 0; i < this.sum; ++i) {
            this.array.push(i);
        }
    }
    AppComponent.prototype.onScroll = function () {
        console.log('scrolled!!');
        // add another 20 items
        var start = this.sum;
        this.sum += 5;
        for (var i = start; i < this.sum; ++i) {
            this.array.push(i);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [angular2_infinite_scroll_1.InfiniteScroll],
            styles: ["\n    .search-results {\n      height: 100%;\n      // overflow: scroll;\n    }\n    .title {\n      position: fixed;\n      top: 0;\n      left: 0;\n      background-color: rgba(0,0,0,.5);\n      color: white;\n      width: 100%;\n    }\n  "],
            template: "\n    <h1 class=\"title\">Hello InfiniteScroll!<aside>items: {{sum}}</aside></h1>\n    <div class=\"search-results\"\n         infinite-scroll\n         [infiniteScrollDistance]=\"-1\"\n         (scrolled)=\"onScroll()\">\n      <p *ngFor=\"let i of array\">\n        {{i}}\n      </p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map