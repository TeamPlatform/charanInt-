import { Component,OnInit,OnChanges,SimpleChanges,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response,Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import {ProjectSelectionServiceComponent} from './projectSelection.service';
//import {ProjectDetailComponent} from './pDetail.component';
import {Post} from './post';
@Component({
  selector: 'app-selection',
  templateUrl:'./html/projectSelection.html' ,

   providers: [ProjectSelectionServiceComponent],

   


 })//componrnt  closing

export class SelectionComponent implements OnInit, OnChanges {
   // headers: Headers;
   //  options: RequestOptions;
   theFiles:any;
   relativePath :any;
   datas:Post[]; 
   selectedDropdown:string; 
   child:string
   projectSelectionData=[];
   currentFile:any;
 projectName:string;
<<<<<<< HEAD
 Folder:any
=======
 Folder:any;
 sucess:any;
 message:any;
 pomFile:any;
 testFile:any;
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
   constructor(private ata:ProjectSelectionServiceComponent,private router: Router,private http:Http){
	this.theFiles= [];

   }


      ngOnInit(){
  	
//console.log("iiiiiiiiiiiiiiiii")
          this.ata.getProjectSelectionDetails()
          .subscribe(llData => {this.datas=llData, console.log(this.datas)});

         // console.log(this.datas)

          // this.datas=this.projectSelectionData;



      }

// filesPicked(event) {
//   //console.log(event)
//   var Folder:any;
//  var sourceFolder = new Folder("~/Desktop/code000"); 
//  console.log(sourceFolder)
// var destFolder = new Folder("~/Desktop/ingt");  
// var fileList = sourceFolder.getFiles();
// console.log(fileList)  
// for (var i = 0; i < fileList.length; i++) {  
//     if (fileList[i].copy(decodeURI(destFolder) + "/" + fileList[i].displayName)) {  
//         fileList[i].remove();  
//     }    
// } 
//     ///alert(folder[0]);
// }

 filesPicked(e) {
     let totalLength =  e.target.files.length;
 var files = e.target.files;
     var path = files[0].webkitRelativePath;
    var Folder = path.split("/");
<<<<<<< HEAD
=======
    console
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
    this.projectName=Folder[0]
    //alert(Folder[0]);
   //this.createDbs(projectName)
    for (var i = 0; i <totalLength ; i++) {
      //console.log("pqqqqqqqqqwwww")
     this.theFiles =<Array<File>>e.target.files;
//console.log(this.theFiles)

    this.relativePath = this.theFiles[i].webkitRelativePath;
    this.currentFile = this.theFiles[i];
<<<<<<< HEAD

   // console.log(this.relativePath)
=======
   console.log(this.relativePath)
  // console.log(this.currentFile )
    var checkPom=this.relativePath.split("/").pop();
    //console.log(ddd)
  if (checkPom=="pom.xml" ){
   this.pomFile="present"
    }
    if (checkPom=="TestRunnerNew.java" ){
   this.testFile="present"
    }
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
    //this.upload(this.relativePath,this.theFiles[i] )
   // console.log(this.relativePath)
  //var str = "public/inline.js";
 
      var a =   this.relativePath.replace(/[/]/gi, '-');
     // console.log(a)
      //var b = 10;
  this.makeFileRequest("/projectSelection/"+a, [],this.theFiles,i,totalLength ).then((result) => {

console.log(typeof(result)+result)

     // this.makeFileRequest("/projectSelection", [],sendFile).then((result) => {
//             if (result=="Imported Succesffully"){
//               //console.log("kkkyyyyyy")
//             this.message=result
// }
// else{
//   this.message="Please Wait"
// }
        }, 
        (error) => {
            console.error("error");
        });
    
   
}

  
if( this.pomFile!="present" ){
  alert("pom.xml is not present")
}
if( this.testFile!="TestRunnerNew.java"){
  alert("TestRunnerNew.java is not present")
}

   
}
createDbs(){
<<<<<<< HEAD
console.log( this.projectName+"pppppppppp")
  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('projectName', this.projectName);


    return this.http.post('/selectedProjectName', urlSearchParams)
      .subscribe(data => {
      console.log(data);
    });


=======
//console.log( this.projectName+"pppppppppp")
  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('projectName', this.projectName);


    return this.http.post('/selectedProjectName', urlSearchParams)
      .subscribe(data => {
      console.log(data);
    });


>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0


}
//  upload(sendPath,sendFile) {
// //console.log(sendPath)
// console.log(sendFile)
//   //var str = "public/inline.js";
  
//       var a =   sendPath.replace(/[/]/gi, '-');
//       console.log(a)
//         this.makeFileRequest("/projectSelection/"+a, [],sendFile).then((result) => {



//      // this.makeFileRequest("/projectSelection", [],sendFile).then((result) => {
//            // console.log(result);
//         }, 
//         (error) => {
//             console.error("error");
//         });
//     }
<<<<<<< HEAD
        makeFileRequest(url: string, params: Array<string>, files: Array<File>,i:number,totalLength :number) {
=======
 makeFileRequest(url: string, params: Array<string>, files: Array<File>,i:number,totalLength :number) {
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
            //console.log(' i '+i);
            // console.log("url  "+url)
            // console.log("urlparams  "+params)
            // console.log(files)
           //  console.log(files.length)
           // var beforeWait=files.length *45;

     //console.log("99999999"+typeof(beforeWait)+beforeWait)
   
 // this.sucess=setTimeout(()=> {
       
   
 //      this.message="Create Dbs"


 //      },beforeWait)

            // console.log(files[i].name)
            // console.log(files[i])
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            // for(var i = 0; i < files.length; i++) {
            //     formData.append(this.relativePath , files[i], files[i].name);
            // }
        //   for(var i = 0; i < files.length; i++) {
          //      console.log(files.length)
                formData.append(this.relativePath , files[i]);
           // }
           //formData.append("mm",files[i] );
        
           formData.append("totalLength",totalLength );
           formData.append("currentLength",i );
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                      //console.log(JSON.parse(xhr.response))
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
            //console.log("formData      "+formData)
        });
    }



          dropdownData(dataSelected){

            sessionStorage.setItem('key',this.selectedDropdown);
             this.router.navigate(['/projectDetail']);

          }

             ngOnChanges(){


             }








}