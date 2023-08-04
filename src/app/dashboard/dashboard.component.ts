import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // rowData: any[]=[
  //   {make:'Toyota',model:'Celica',price:35000},
  //   {make:'Ford',model:'Mondeo',price:32000},
  //   {make:'Porsche',model:'Boxter',price:72000}
  // ];
  rowData$!: Observable<any[]>;
  colDefs: ColDef[]=[
    {field:'name',checkboxSelection: true, headerCheckboxSelection: true},
    {field:'fname'},
    {field:'email'},
    {field:'class'},
    {field:'addmission'},
    {field:'house'},
    {field:'address'},
    {field:'contact'}
  ];
  defaultColDef: ColDef={
    sortable:true, filter:true
  }
  constructor(private http: HttpClient){}
  
 ngOnInit(){
  this.rowData$=this.http.get<any[]>('https://localhost:7284/Student')
 }

}

