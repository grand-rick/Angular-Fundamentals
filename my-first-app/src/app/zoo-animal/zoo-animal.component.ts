import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/Animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent implements OnInit{
  @Input() animal: Animal;
  @Output() liked: EventEmitter<Animal> = new EventEmitter;

  constructor () {
    this.animal = {
      id: 1,
      name: '',
      fed: true
    }
  }

  ngOnInit(): void {
  }

  onLike(animal: Animal): void {
    this.liked.emit(animal);
  }
}
