import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken of glory', 'is just roasted chicken with herbs','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191011-keto-fried-chicken-delish-ehg-2658-1571677666.jpg?crop=0.716xw:1.00xh;0.170xw,0&resize=768:*'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
