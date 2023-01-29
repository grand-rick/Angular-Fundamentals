import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  name: string = 'Lemonade';
  ingredients: string[] = ['Lemon', 'Water', 'Sugar'];
}
