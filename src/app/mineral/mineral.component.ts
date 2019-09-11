import { Component, OnInit, Input } from '@angular/core';
import { MineralService } from '../mineral.service';

@Component({
  selector: 'app-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: ['./mineral.component.css']
})
export class MineralComponent implements OnInit {
  @Input() mineral = '';
  minerals: Array<string> = [];
  constructor(private _mineralService: MineralService) { }

  ngOnInit() {
    this.minerals = this._mineralService.getMinerals();
  }

  addMineral() {
    this.minerals.push(this.mineral);
    this.mineral = '';
  }

  //Used This before the Service
  /*getMinerals(){
    return ['Gold','Silver'];
  }*/

}
