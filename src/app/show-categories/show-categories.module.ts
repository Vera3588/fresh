import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { ShowCategoriesRoutingModule } from './show-categories-routing.module';

@NgModule({
  exports: [CardComponent],
  declarations: [CardComponent],
  imports: [CommonModule, ShowCategoriesRoutingModule],
  providers: [],
})
export class ShowCategoriesModule { }
