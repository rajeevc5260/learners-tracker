import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { LearnerDataModel } from "../../DataModel/learnerData.Model";
import { UpdatePlacementstatusComponent } from '../update-placementstatus/update-placementstatus.component';
@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {
  learnerDatas: LearnerDataModel[] = []; // Get for learner model

  filteredLearnerDatas: LearnerDataModel[]= [] ;


  // filter by project
_filterProject: String ='Project';

get filterProject(){
  return this._filterProject;
}

set filterProject(value: String){
  this._filterProject = value;
  this.filteredLearnerDatas = this.filterStudentByProject(value)
}

 // filter by Batch
 _filterBatch: String ='Batch';

 get filterBatch(){
   return this._filterBatch;
 }

 set filterBatch(value: String){
   this._filterBatch = value;
   this.filteredLearnerDatas = this.filterStudentByBatch(value)
 }

// filter by CourseStatus
_filterCourseStatus: String ='Course Status';

get filterCourseStatus(){
  return this._filterCourseStatus;
}

set filterCourseStatus(value: String){
  this._filterCourseStatus = value;
  this.filteredLearnerDatas = this.filterStudentByCourseStatus(value)
}

  constructor(private learnerServices:LearnersDataService, private dialogePopUp:MatDialog) { }
  

  // filter using project
  filterStudentByProject(filterTerm: String){
    if(this.filteredLearnerDatas.length === 0 || this.filterProject === ''){
      return this.filteredLearnerDatas;
    }else{
      return this.filteredLearnerDatas.filter((LearnerDataModel)=>{
        return LearnerDataModel.project === filterTerm;
      })
    }
  }
  // filter using Batch
  filterStudentByBatch(filterTerm: String){
    if(this.filteredLearnerDatas.length === 0 || this.filterProject === ''){
      return this.filteredLearnerDatas;
    }else{
      return this.filteredLearnerDatas.filter((LearnerDataModel)=>{
        return LearnerDataModel.batch === filterTerm;
      })
    }
  }
  // filter using CourseStatus
  filterStudentByCourseStatus(filterTerm: String){
    if(this.filteredLearnerDatas.length === 0 || this.filterProject === ''){
      return this.filteredLearnerDatas;
    }else{
      return this.filteredLearnerDatas.filter((LearnerDataModel)=>{
        return LearnerDataModel.courseStatus === filterTerm;
      })
    }
  }
  
  //  refresh the filter
  refresh(){
    window.location.reload()
  }
  ngOnInit(): void {
     // Read learners Details
     this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.filteredLearnerDatas = JSON.parse(JSON.stringify(data));
    });
  }

   // Update a learner Details
   updateLearnerPlacement(learnerData: any) {
    localStorage.setItem('editLearnerId', learnerData._id.toString());
    this.dialogePopUp.open(UpdatePlacementstatusComponent);
  }
  
}
