import { Component, OnInit } from '@angular/core';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  uploadLearnerFile = {
    learnerId: '',
    name: '',
    project: '',
    batch: '',
    courseStatus: '',
  };

  file: any;
  arrayBuffer: any;
  filelist: any;
  constructor(private addLearnerServices:LearnersDataService) {}

  
  // code for uploading excelSheet to body
  readExcel(event: any) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join('');
      var workbook = XLSX.read(bstr, { type: 'binary' });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      var arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.filelist = [arraylist];
      console.log(this.filelist);
    };
  }

  ngOnInit(): void {}

  // add multiple learner function
  addLearner() {
    console.log(this.filelist[0]);
    this.addLearnerServices.addMultipleLearner(this.filelist[0]).subscribe((res) => {
      alert('Candidate details added Sucessfully');  
      // console.log(this.uploadLearnerFile);
      window.location.reload();
    });
  }
}
