import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { User } from './details';
import { AuthService } from '../services/auth.service';


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

  public users: User[] | undefined;  
  public columnDefs: ColDef[] | undefined;  
  // gridApi and columnApi  
  private api!: GridApi ;  
  constructor(private userService: AuthService, ) {  
    this.columnDefs = this.createColumnDefs();  
}
ngOnInit() {  
  this.userService.getUsers().subscribe(data => {  
      this.users = data  
  })  
}  
  onGridReady(params: { api: GridApi<any>; columnApi: ColumnApi; }): void {  
    this.api = params.api;  
    this.api.sizeColumnsToFit();  
}  
private createColumnDefs() {  
  return [{field:'name',checkboxSelection: true, headerCheckboxSelection: true},
  {field:'fname'},
  {field:'email'},
  {field:'class'},
  {field:'addmission'},
  {field:'house'},
  {field:'address'},
  {field:'contact'}]
}  

}

