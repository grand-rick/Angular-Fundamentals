import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZooService {

  constructor() { }

  getAnimals() {
    return [
      {
        id: 1,
        name: 'Panda',
        fed: true
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true
      },
      {
        id: 3,
        name: 'Lion',
        fed: false
      }
    ];
  }
}
