import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Avacodo, Mushrooms, & Fixings', 'images/hamburger-recipe.jpg', 'Image of hamburger by SerenityArt from Pixabay'),
    new Recipe('Hot Dog', 'Polish Dog, Cheese, & Fixings', 'images/hot-dog-recipe.jpg', 'Image of hotdogs by hummelltime from Pixabay')
  ];
}
