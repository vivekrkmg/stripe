import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Module as StripeModule } from "stripe-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPaymentComponent } from './default-payment/default-payment.component';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPaymentComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StripeModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
