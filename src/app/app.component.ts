import { NumberDataService } from './number-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-facts';
  fact: string;
  num: string;
  constructor(private data: NumberDataService) {

  }

  getData() {
    this.data.getData(Number.parseInt(this.num, 10)).subscribe((fact) => {
      this.fact = fact;
    },
      (error) => console.log(error));
  }
}
