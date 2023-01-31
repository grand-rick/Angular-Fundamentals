import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../models/Animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit{
  @Input() animal: Animal;

  constructor () {
    this.animal = {
      id: 1,
      name: '',
      fed: true
    }
  }

  ngOnInit(): void {

  }
}
