import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    constructor(public router: Router) {
        // console.log(this.isToggled());
        // if (!this.isToggled()) {
        //     this.toggleSidebar();
        // }
        // this.toggleSidebar();
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                console.log('Sidebar constructor');
                this.toggleSidebar();
            }
        });
    }

    eventCalled() {
        console.log('Sidebar event called');
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        console.log('Sidebar add expand class');

        if (element === this.showMenu) {
        console.log('Sidebar show menu');
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        console.log('Sidebar is toggled method');
        const dom: Element = document.querySelector('body');
        console.log(dom.classList.contains(this.pushRightClass));
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        console.log('Sidebar is toggleSidebar method');
        const dom: any = document.querySelector('body');
        console.log(dom.classList.toggle(this.pushRightClass));
        // dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
