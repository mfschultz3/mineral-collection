import { Component, OnInit, Input } from '@angular/core';
import { MineralService, Mineral } from '../mineral.service';

@Component({
  selector: 'app-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: ['./mineral.component.css']
})
export class MineralComponent implements OnInit {
  mineral: Mineral = {
    type: null,
    collected_in: null,
    weight_in_grams: null
  };
  minerals;

  constructor(private _mineralService: MineralService) {   }

  ngOnInit() {
    this.loadMinerals();
  }

  loadMinerals(){
    this._mineralService.getMinerals().subscribe(
      data => this.minerals = data
    )
  }

  addMineral() {
   this._mineralService.addMineral(this.mineral).subscribe(mineral => this.minerals.push(mineral));
  }

  deleteMineral(removedMineral: Mineral) {
    this._mineralService.deleteMineral(removedMineral).subscribe(mineral => this.loadMinerals());
  }

  resetCollection() {
    this._mineralService.resetCollection().subscribe(mineral => this.loadMinerals());
  }

}
