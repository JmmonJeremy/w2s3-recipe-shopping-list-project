import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  ingredients: Ingredient [] = [
    new Ingredient('Mushrooms', 2),
    new Ingredient('Cheese Slice', 1)
  ];
}
