import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private http:HttpClient) { }
    departments:any[];

    modalTitle = "";
    DepartmentId = 0;
    DepartmentName - "";

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(){
    this.http.get<any>(environment.API_URL+'department')
    .subscribe(data=>{
      this.departments=data;
    });
  }

  addClick(){
    this.modalTitle="Add Department";
    this.DepartmentId=0;
    this.Departmentname= "";
  }

  editClickdep:any(){
    this.modalTitle="Edit Department";
    this.DepartmentId=dep.DepartmentId;
    this.Departmentname=dep.Departmentname;
  }

  createClick(){
    var val={
      DepartmentName:this.DepartmentName
    };

    this.http.post(environment.API_URL+'department',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  updateClick(){
    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };

    this.http.put(environment.API_URL+'department',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  deleteClick(){
    if(confirm('Are you sure'){

    this.http.delete(environment.API_URL+'department',+id)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }




