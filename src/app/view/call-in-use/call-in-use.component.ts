import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { callsData, customersData } from 'src/app/data/data';
import { Call } from 'src/app/model/call';

@Component({
  selector: 'app-call-in-use',
  templateUrl: './call-in-use.component.html',
  styleUrls: ['./call-in-use.component.css']
})
export class CallInUseComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    firstName: new FormControl(''),
    surName: new FormControl(''),
    mobile: new FormControl(''),
    home: new FormControl(''),
  });
  updated: Boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customers = customersData;
    this.route.paramMap.subscribe(params => {
      const id =params.get("id");
      this.customer = this.customers.find(customer => customer.id == parseInt(id));
    });

    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      title: new FormControl(this.customer.title, [Validators.required]),
      firstName: new FormControl(this.customer.firstName, Validators.required),
      surName: new FormControl(this.customer.surName, Validators.required),
      mobile: new FormControl(this.customer.mobile, Validators.required),
      home: new FormControl(this.customer.home, Validators.required),
    });
  }

  get title() { return this.customerForm.get('title'); }

  get firstName() { return this.customerForm.get('firstName'); }

  get surName() { return this.customerForm.get('surName'); }

  get mobile() { return this.customerForm.get('mobile'); }

  get home() { return this.customerForm.get('home'); }

  reset() {
    if (!this.updated) {
      this.customerForm.setValue({
        id: this.customer.id,
        title: this.customer.title,
        firstName: this.customer.firstName,
        surName: this.customer.surName,
        mobile: this.customer.mobile,
        home: this.customer.home
      })
    }
  }

  update() {
    const newCustomer: Customer = this.customerForm.value;

    const oldCustomer: Customer = customersData.find(customer => customer.id == newCustomer.id);

    const oldCall: Call = callsData.find(call => call.customerId == newCustomer.id);

    if (oldCustomer) {
      oldCustomer.title = newCustomer.title;
      oldCustomer.firstName = newCustomer.firstName;
      oldCustomer.surName = newCustomer.surName;
      oldCustomer.mobile = newCustomer.mobile;
      oldCustomer.home = newCustomer.home;

      oldCall.name = `${newCustomer.title} ${newCustomer.firstName} ${newCustomer.surName}`

      this.updated = true;
    }
  }
}
