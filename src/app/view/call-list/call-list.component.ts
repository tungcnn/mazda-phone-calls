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
      { customerId: 1, name: "Mr Eren Yaeger", date: new Date("01/21/2022"), callStatus: "Completed", type: "Service" },
      { customerId: 2, name: "Mrs Mikasa Ackerman", date: new Date("04/29/2021"), callStatus: "New", type: "Service" },
      { customerId: 3, name: "Mr Levi Ackerman", date: new Date("06/13/2021"), callStatus: "New", type: "Sales" },
      { customerId: 4, name: "Miss Historia Reiss", date: new Date("09/07/2021"), callStatus: "In use", type: "Sales" },
      { customerId: 5, name: "Miss Ymir Fritz", date: new Date("03/02/2022"), callStatus: "In use", type: "Service" }
    ];

    this.searchResults = this.calls;
    this.dataSource = this.searchResults;
    this.statuses = ["New", "Completed", "In Use"];
    this.types = ["Sales", "Service"];
  }

  public searchCall(callParam: NgForm) {
    const searchParam = callParam.value;

    this.searchResults = this.calls.filter(call => {
      const hasType: Boolean = call.type == searchParam.type || !searchParam.type;
      const hasStatus: Boolean = call.callStatus == searchParam.callStatus || !searchParam.callStatus;
      const withinDateRange: Boolean = (call.date >= searchParam.startDate || !searchParam.startDate) 
                                        && (call.date <= searchParam.endDate || !searchParam.endDate)

      if (hasType && hasStatus && withinDateRange) return call;
    })

    this.dataSource = this.searchResults;
  }

  public setSelectedCall(call: Call) {
    this.currentCall = call;

    console.log(this.currentCall);
  }
}
