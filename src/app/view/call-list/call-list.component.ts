import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { callsData } from 'src/app/data/data';
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
    this.calls = callsData;
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
    this.currentCall = undefined;
  }

  public setSelectedCall(call: Call) {
    this.currentCall = call;
  }
}
