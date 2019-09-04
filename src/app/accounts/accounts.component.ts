import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from  'rxjs';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public data: any;
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  myFiles: string [] = [];
  sMsg: string = '';
  constructor() { }

  ngOnInit() {
  }

  fileOverBase(event):  void {
    this.hasBaseDropZoneOver  =  event;
}

  getFileDetails (e) {
    for (let i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
    console.log('AccountsComponent -- getFileDetails', this.myFiles);
  }

  uploadFiles () {
    const frmData = new FormData();
    for (let i = 0; i < this.myFiles.length; i++) {
      frmData.append('fileUpload', this.myFiles[i]);
    }
    console.log('AccountsComponent -- uploadFiles', this.myFiles, frmData);
    // this.httpService.post('http://localhost:60505/api/fileupload/', frmData).subscribe(
    //   data => {
    //     // SHOW A MESSAGE RECEIVED FROM THE WEB API.
    //     this.sMsg = data as string;
    //     console.log (this.sMsg);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);    // Show error, if any.
    //   }
    // );
  }

  // upload(files: any) {
  //   try {
      
  //     if (files.length === 0)
  //     return;
  //     const formData = new FormData();

  //   for (let file of files)
  //     formData.append(file.name, file);

  //     console.log('AccountsComponent -- upload', files, formData);
  //   }
  //   catch(ex) {
  //     console.error('AccountsComponent -- upload', ex);
  //   }
  // }

}
