import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ShowCategoriesModule } from './show-categories.module';


const routes: Routes = [
  { path: 'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCategoriesRoutingModule { 

}
