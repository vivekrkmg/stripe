import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StripeScriptTag } from "stripe-angular"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private publishableKey:string = "pk_test_ouE6hM3uDJNpL0eAGZTvd5sS00ZUQoU89h"
  title = 'StripePayment';

  constructor(public StripeScriptTag:StripeScriptTag, private router: Router){
    this.StripeScriptTag.setPublishableKey( this.publishableKey )
    this.router.navigate(['payment']);
  }
}
