import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuoteComponent } from './quote/add-quote/add-quote.component';
import { QuoteComponent } from './quote/quote.component';
import { QouteDetailComponent } from './quote/qoute-detail/qoute-detail.component';


const routes: Routes = [
  {
    path: '',
    component: QuoteComponent,
    children: [
      {
        path: 'quotes/:id',
        component: QouteDetailComponent
      }
    ]
  },
  {
    path: 'add-quote',
    component: AddQuoteComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
