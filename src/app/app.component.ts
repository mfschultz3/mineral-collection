import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mineral-collection';

  @Input() mineral = '';

  minerals: Array<String> = ['Gold', 'Pyreite'];

  constructor() { }

  ngOnInit() {

  }

  addMineral(){
    this.minerals.push(this.mineral);
    this.mineral = '';
  }


}
