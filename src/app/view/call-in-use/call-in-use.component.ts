import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-call-in-use',
  templateUrl: './call-in-use.component.html',
  styleUrls: ['./call-in-use.component.css']
})
export class CallInUseComponent implements OnInit {
  customers: Customer[];

  constructor() { }

  ngOnInit() {
    this.customers = [
      {id: 1, title: "Mr", firstName: "Eren", surName: "Yaeger", mobile: "0412345678", home: "0387654321"},
      {id: 2, title: "Mrs", firstName: "Mikasa", surName: "Ackerman", mobile: "0412345678", home: "0387654321"},
      {id: 3, title: "Mr", firstName: "Levi", surName: "Ackerman", mobile: "0412345678", home: "0387654321"},
      {id: 4, title: "Miss", firstName: "Historia", surName: "Reiss", mobile: "0412345678", home: "0387654321"},
      {id: 5, title: "Miss", firstName: "Ymir", surName: "Fritz", mobile: "0412345678", home: "0387654321"},
    ]
  }

}
