import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  PaymenForm: FormGroup;

  title = 'demo3';
  amount=2000;
  // cardNumber: string;
  // expiryMonth: string;
  // expiryYear: string;
  // cvc: string;

  Message: string;
  constructor(private fb: FormBuilder,private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

createForm(){
  this.PaymenForm = this.fb.group({
    message:[''],
    cardNumber: [''],
    expiryMonth: [''],
   expiryYear: [''],
     cvc: [''],
  });
}

  getToken() {
    debugger
   // this.Message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      
      number: this.PaymenForm.controls.cardNumber.value,
      exp_month: this.PaymenForm.controls.expiryMonth.value,
      exp_year: this.PaymenForm.controls.expiryYear.value,
      cvc: this.PaymenForm.controls.cvc.value
    },
     (status: number, response: any) => {
      debugger
      if (status === 200) {
        Swal.fire({
          title: 'Done',
          text: 'Payment Successfull',
          type: 'warning',
        })
        this.Message ='';
      //  this.PaymenForm.controls.message.setValue('Success! Card token ${response.card.id}.');
        this.Message = `Success! Card token ${response.card.id}.`;
      } else {
        Swal.fire({
          title: 'Error',
          text: response.error.message,
          type: 'warning',
        })
      //  this.Message = response.error.message;
      }
    });
  }

  navigate(){
    this.router.navigate(['default-payment']);
  }

  // openCheckout() {
  //   debugger
  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: this.key,
  //     locale: 'auto',
  //     token: function (token: any) {
  //     }
  //   });
  //   handler.open({
  //     name: 'Demo Site',
  //     description: '2 widgets',
  //     amount: this.amount
  //   });
  // }
  

}
