import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [NgbTabsetConfig]
})
export class DashboardComponent implements OnInit {
    mySlideImages = [1, 2, 3].map((i) => `../../../assets/images/slider/${i}.jpg`);
    myCarouselImages = [1, 2, 3].map((i) => `../../../assets/images/slider/${i}.jpg`);
    mySlideOptions = { items: 1, dots: false, button: true, nav: true };
    myCarouselOptions = { items: 3, dots: false, button: true, nav: true };

    constructor(config: NgbTabsetConfig) {
        config.justify = 'center';
    config.type = 'pills';
    }

    ngOnInit() { }


}
