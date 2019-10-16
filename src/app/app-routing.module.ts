import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { DefaultPaymentComponent } from './default-payment/default-payment.component';


const routes: Routes = [
  { path: 'payment', component: PaymentComponent},
  { path: 'default-payment', component: DefaultPaymentComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
