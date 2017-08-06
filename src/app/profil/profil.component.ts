import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Candida } from '../candida/candida';


@Component({
    selector: 'my-profil',
    templateUrl: './profil.template.html',
    styleUrls: []
})
export class ProfilComponent {

    candida: Candida;

    constructor(private router: Router) { }


    save(): void {

    }

    goBack(): void {
        console.log(this.candida);
        let link = ['/account'];
        this.router.navigate(link);
    }
}

