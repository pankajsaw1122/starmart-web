import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    adminName: String = '';
    fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

    constructor(public router: Router) {
        console.log('Header constructor');
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
            console.log('Header constructor condition');
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.toggleSidebar();
        this.adminName = localStorage.getItem('adminName');
    }
    isToggled(): boolean {
        console.log('Header isToggled');
        const dom: Element = document.querySelector('body');
        console.log(dom.classList.contains(this.pushRightClass));
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        console.log('Header toggleSidebar');
        const dom: any = document.querySelector('body');
        console.log(dom);
        console.log(dom.classList.toggle(this.pushRightClass));
        // dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        window.localStorage.clear();
    }
}
