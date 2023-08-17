import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { User } from './details';
import { AuthService } from '../services/auth.service';
import {jsPDF}from 'jspdf';
import 'jspdf-autotable';



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
  private columnApi!:ColumnApi;
  constructor(private userService: AuthService, ) {  
    this.columnDefs = this.createColumnDefs();  
}
function() {
  var doc = new jsPDF('p', 'pt', 'letter')
  // Supply data via script
  var head=[['class', '1st installment', '2nd installment' , 'last date 1st', 'last date 2nd']]
  var body = [
             ['1-5 standard',  22000,18000, '31-Aug-2023','31-Nov-2023'],
             ['6-8 standard' ,  25000,22000, '31-Aug-2023','31-Nov-2023'],
             ['9-10 standard', 30000,22000, '31-Aug-2023','31-Nov-2023'],
             ['11-12 standard', 35000,22000, '31-Aug-2023','31-Nov-2023'],
             ]
   var name = prompt('What is your name?');           

  doc.setLineWidth(2);
  doc.setFontSize(20);
 doc.text('Fees Structure of RGPV University', 155, 18);

 doc.setTextColor(192, 30, 76);
 doc.setFontSize(15);
 doc.text('This belongs to: ' + name, 40, 60);
 
  (doc as any).autoTable({
      head:head,
      body: body,
      startY: 70,
      theme: 'grid',
               })
doc.setTextColor(192, 30, 76);
 doc.setFontSize(10);
 doc.text('Hi, ' + name + ' please deposite your fee on fees counter through CASH/Cheque or you can also choose online payment method', 40, 210);
 doc.text('like IMPS/NEFT/RTGS to pay fees', 40, 225);
 doc.setFontSize(15);
 doc.text('Account Details : State Bank Of India', 40, 250);
 doc.text('Account No. :100820012220', 40, 275);
 doc.text('IFSC: SBIK01008', 40, 300);
  // save the data to this file
  doc.output('dataurlnewwindow');
  //doc.save('fees_structure');
}
ngOnInit() {  
  this.userService.getUsers().subscribe(data => {  
      this.users = data  
  })  
}  
  onGridReady(params: { api: GridApi<any>; columnApi: ColumnApi; }): void {  
    this.api = params.api;  
    this.columnApi= params.columnApi;
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
defaultColDef: ColDef={
  sortable:true, filter:true,editable: true,
}
public rowSelection: 'single' | 'multiple' = 'single';


onSelectionChanged(){
  var selectedRows = this.api.getSelectedRows();  
  alert(selectedRows[0].id);
}
status: any; 
deleteUser() {    
  var selectedRows = this.api.getSelectedRows();  
  if (selectedRows.length == 0) {  
      window.alert("Please select a User for deletion");  
      return;  
  }  
  this.userService.deleteUser(selectedRows[0].id).subscribe(data => {  
      console.log(data);  
      this.ngOnInit();   
  });  

}  
editUser() {  
  const d = this.api.getEditingCells();  
  if (this.api.getSelectedRows().length == 0) {  
    window.alert("Please select a User for deletion"); 
      return;  
  }  
  var row = this.api.getSelectedRows();  
  this.userService.updateUser(row[0].id).subscribe(data => {  
    console.log(data);
      this.ngOnInit();  
  });  
}  

}

