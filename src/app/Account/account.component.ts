import { Component }        from '@angular/core';
import { Router }            from '@angular/router';



@Component({
    selector: 'my-account',
    templateUrl: './account.template.html',
    styleUrls: [ ]
})
export class AccountComponent {


    constructor(private router: Router) { }


    previous(): void {
    let link = ['/profil'];
    this.router.navigate(link)
    }
}