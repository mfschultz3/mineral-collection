import { Component, OnInit, Input } from '@angular/core';
import { MineralService } from '../mineral.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: ['./mineral.component.css']
})
export class MineralComponent implements OnInit {
  @Input() mineral = '';
  minerals = [];

  constructor(private _mineralService: MineralService) { }




  ngOnInit() {

    this._mineralService.getMinerals().subscribe(
      data => this.minerals = data
    );
  }

  loadMinerals(){
    this._mineralService.getMinerals().subscribe(
      data => this.minerals = data
    )
  }

  addMineral() {
    this.minerals.push({name: this.mineral});
    //this.mineral = ''; //uncomment to clear mineral text bar after add mineral is clicked
  }

  // Used This before the Service
  /*getMinerals(){
    return ['Gold','Silver'];
  }*/

}
