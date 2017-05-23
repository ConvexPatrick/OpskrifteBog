import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TestRecipe', 'This is a Test',
      'http://www.zhauns.co.za/sites/default/files/styles/machine-colorbox/public/machine-images/Doughnuts.jpg?itok=LECvxRJv'),
    new Recipe('TestRecipe', 'This is a Test',
      'http://www.zhauns.co.za/sites/default/files/styles/machine-colorbox/public/machine-images/Doughnuts.jpg?itok=LECvxRJv')
  ];

  constructor() { }

  ngOnInit() {
  }

}
