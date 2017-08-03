import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html',
  styleUrls: ['./css/bootstrap.min.css', './css/gsdk-bootstrap-wizard.css' ]
})
export class AppComponent {

  funish:false

  constructor() { }

  save(): void {

  }

  goBack(): void {
    console.log('fff')
  }
}
