import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { AddCandidatesComponent } from '../add-candidates/add-candidates.component';
import { LearnerUpdateComponent } from '../learner-update/learner-update.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { LearnerDataModel } from '../../DataModel/learnerData.Model';

@Component({
  selector: 'app-learners-analytics',
  templateUrl: './learners-analytics.component.html',
  styleUrls: ['./learners-analytics.component.css'],
})
export class LearnersAnalyticsComponent implements OnInit {
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
 
  constructor(
    private dialogePopUp: MatDialog,
    private learnerServices: LearnersDataService
  ) {}

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

  // Popup Dialoge Tabs for /ADD/UPLOAD FILE
  addOpen() {
    this.dialogePopUp.open(AddCandidatesComponent);
  }
  uploadFile() {
    this.dialogePopUp.open(UploadFileComponent);
  }

  // Update a learner Details
  updateLearner(learnerData: any) {
    localStorage.setItem('editLearnerId', learnerData._id.toString());
    this.dialogePopUp.open(LearnerUpdateComponent);
  }

  // delete a learner
  deleteLearner(learnerData: any) {
    this.learnerServices.deleteLearner(learnerData._id).subscribe((data) => {
      this.filteredLearnerDatas = this.filteredLearnerDatas.filter(
        (learner) => learner !== learnerData
      );
    });
  }


  ngOnInit(): void {
    // this.filteredLearnerDatas = this.learnerDatas;
    // Read learners Details
    this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.filteredLearnerDatas = JSON.parse(JSON.stringify(data));
    });
  }
  
  
}
