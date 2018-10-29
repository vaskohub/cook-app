import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'http://www.mrshappyhomemaker.com/wp-content/uploads/2013/02/shrimpgrits14.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a simply test',
      'http://www.mrshappyhomemaker.com/wp-content/uploads/2013/02/shrimpgrits14.jpg'
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
