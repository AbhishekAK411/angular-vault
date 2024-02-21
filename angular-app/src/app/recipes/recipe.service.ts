import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1V9y4aAUZlpdamdasLFMxYjMbi8rEzcAZg&usqp=CAU'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1V9y4aAUZlpdamdasLFMxYjMbi8rEzcAZg&usqp=CAU'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
