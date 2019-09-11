import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const minerals = [
  {
    name: 'Gold'
  },
  {
    name: 'Silver'
  },
  {
    name: 'Copper'
  }
];

@Injectable({
  providedIn: 'root'
})

export class MineralService {

  constructor() { }

  getMinerals() {
    return of(minerals);
  }

}
