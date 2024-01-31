import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCategoriesRoutingModule } from './search-categories-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  exports:[SearchBarComponent],
  declarations: [SearchBarComponent],
  imports: [
    CommonModule, SearchCategoriesRoutingModule
  ]
})
export class SearchCategoriesModule { }
