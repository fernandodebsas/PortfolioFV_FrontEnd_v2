import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations:Education[]=[];
  
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    this.getEducation();
  }

  public getEducation():void {
    this.educationService.getEducation().subscribe({
      next:(Response: Education[]) => {
        this.educations= Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
