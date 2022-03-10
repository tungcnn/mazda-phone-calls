import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Call } from 'src/app/model/call';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css']
})
export class CallListComponent implements OnInit {
  calls: Call[];
  searchResults: Call[];
  statuses: String[];
  types: String[];
  displayedColumns: string[] = ['name', 'date', 'type', 'status'];
  dataSource: Call[];
  currentCall: Call;

  constructor() { }

  ngOnInit() {
    this.calls = [
      { customerId: 1, name: "Mr Eren Yaeger", date: "21/01/2022", status: "Completed", type: "Services" },
      { customerId: 2, name: "Mrs Mikasa Ackerman", date: "21/01/2022", status: "New", type: "Services" },
      { customerId: 3, name: "Mr Levi Ackerman", date: "21/01/2022", status: "New", type: "Sales" },
      { customerId: 4, name: "Miss Historia Reiss", date: "21/01/2022", status: "In use", type: "Sales" },
      { customerId: 5, name: "Miss Ymir Fritz", date: "21/01/2022", status: "In use", type: "Services" }
    ];

    this.searchResults = this.calls;
    this.dataSource = this.calls;
    this.statuses = ["New", "Completed", "In Use"];
    this.types = ["Sales", "Service"];
  }

  public searchCall(callParam: NgForm) {
    console.log(callParam.value)
  }

  public setSelectedCall(call: Call) {
    this.currentCall = call;

    console.log(this.currentCall);
  }
}
