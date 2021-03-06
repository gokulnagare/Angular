import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnChanges  {
  constructor() { }
 
  @Input() employee: Employee;	
  @Input() message: string;	

  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];

  ngOnChanges(changes : SimpleChanges) {
    for (let propName in changes) {  
      let change = changes[propName];
      
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;
      
      if (propName === 'message') {
         this.allMsgChangeLogs.push(changeLog);
      } else if (propName === 'employee') {
         this.allEmployeeChangeLogs.push(changeLog);
      }
    }
  }
}
