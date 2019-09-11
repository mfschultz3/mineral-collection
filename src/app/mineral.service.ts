import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MineralService {

  constructor() { }

  getMinerals() {

    return ['Copper',
      'Aluminium',
      'Pyreite' ];
  }

}
