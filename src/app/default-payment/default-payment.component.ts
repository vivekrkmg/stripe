import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-payment',
  templateUrl: './default-payment.component.html',
  styleUrls: ['./default-payment.component.css']
})
export class DefaultPaymentComponent implements OnInit {
  title = 'StripePayment';
  key='pk_test_ouE6hM3uDJNpL0eAGZTvd5sS00ZUQoU89h';
  amount=2000;

  constructor(private router: Router) { }

  ngOnInit() {
  }

openCheckout() {
    debugger
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_ouE6hM3uDJNpL0eAGZTvd5sS00ZUQoU89h',
      locale: 'auto',
      token: function (token: any) {
      }
    });
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.amount
    });
  }

  navigate(){
    this.router.navigate(['payment']);
  }

}
