import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'showCategories', loadChildren: () => import('./show-categories/show-categories.module').then(m => m.ShowCategoriesModule) },
  { path: 'searchCategories', loadChildren: () => import('./search-categories/search-categories.module').then(m => m.SearchCategoriesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
