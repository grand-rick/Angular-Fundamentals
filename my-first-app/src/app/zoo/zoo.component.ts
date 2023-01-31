import { Component, OnInit } from '@angular/core';
import {Animal} from '../models/Animal';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit{
  animalList: Animal[] = [];

  constructor () {}

  ngOnInit(): void {
    this.animalList = [
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
    ]
  }
}
