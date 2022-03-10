import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { customersData } from 'src/app/data/data';

@Component({
  selector: 'app-call-in-use',
  templateUrl: './call-in-use.component.html',
  styleUrls: ['./call-in-use.component.css']
})
export class CallInUseComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  customerForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customers = customersData;
    this.route.paramMap.subscribe(params => {
      const id =params.get("id");
      this.customer = this.customers.find(customer => customer.id == parseInt(id));
    });

    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      title: new FormControl(this.customer.title),
      firstName: new FormControl(this.customer.firstName),
      surName: new FormControl(this.customer.surName),
      mobile: new FormControl(this.customer.mobile),
      home: new FormControl(this.customer.home),
    });
  }


}
