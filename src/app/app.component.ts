import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html'
})
export class AppComponent {


  constructor() { }

  save(): void {

  }

  goBack(): void {
    console.log('fff')
  }
}
