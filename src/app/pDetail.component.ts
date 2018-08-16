import { Component, Input,OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ProjectDetailServiceComponent } from './pDetail.service';
import {Post} from './post';
import {SelectionComponent} from './projectSelection.component';



@Component({
   selector: 'app-detail',
 
  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./css/pDetail.component.css'],

      providers: [ProjectDetailServiceComponent]   

})//componrnt  closing

export class ProjectDetailComponent implements OnInit  {
   moduleChild:Post[];
  // moduleId:Post[];
moduleName:any;

    projectName:string;
    
 //moduleChild:any[]=[];
 indexvalue:number;

 message:string;
    show: boolean;
    mo:boolean;
    execute:boolean;
    con:boolean;
testExecution:boolean;
displayModule:boolean;
displayFeature:boolean;
displayImport:boolean;
<<<<<<< HEAD
//selectedModule:any;

=======
isValid:string;
importMessage:any;
valid:boolean

//selectedModule:any;

>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
    constructor(private router: Router,private route:ActivatedRoute,private module:ProjectDetailServiceComponent) {
    this.show = false;
    this.mo=false;
    this.execute=false;
 this.testExecution=false;
 this.displayModule=false;
 this.displayFeature=false;
 this.displayImport=false;
    }
 
 

      ngOnInit(){
//var index=0;

<<<<<<< HEAD
            // let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
            // this.projectName=dataFromProjectSelectionDropdown;
           // this.module.projectDetails().subscribe(moduleData =>this.moduleName=moduleData);
=======
            let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
            this.projectName=dataFromProjectSelectionDropdown;
            this.module.projectDetails().subscribe(moduleData =>this.moduleName=moduleData);
      
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
  // this.module.childModuleDetails(index)
  //   .subscribe(moduleData =>{this.oduleChild=moduleData;console.log(this.oduleChild) });
  //     //console.log(this.moduleChild)
      }
 
   showDropDown:boolean;

manualtoggle(index){
 
//alert(index+"000")
 
 
this.module.childModuleDetails(index)
.subscribe(moduleData =>{this.moduleChild=moduleData;
  this.indexvalue=this.moduleChild[0].moduleId;
  console.log(this.moduleChild) });
  console.log(this.moduleChild[0].moduleId);

 
//alert(this.oduleChild.length)

// for (let i = 0; i <=this.moduleChild.length; i++) {
 
  //alert(typeof(this.oduleChild[i].featureName)+this.oduleChild[i].featureName)
  //console.log(this.moduleChild[i].moduleId)

  //this.indexvalue=this.moduleChild[i].moduleId;
  //this.showDropDown=!this.showDropDown;
  //alert(this.showDropDown)
  // this.moduleChild=this.oduleChild;
 //alert(typeof(this.oduleChild[i].moduleId)+this.oduleChild[i].moduleId)
 //var i=0;
 //this.indexvalue=this.moduleChild[i].moduleId
 
 //alert(this.indexvalue)

  // }
//  if(index==this.indexvalue){
   
  
// //console.log(this.moduleChild.featureName)
//   }

}

  



 
        changeShowStatus(){
//alert( this.show)
//this.isValid="isValid";
 if( this.valid!=true){
           this.show = true;
           this.testExecution=false;
           this.mo=false;
<<<<<<< HEAD
           this.execute=false; 
=======
           this.execute=false;
            } 
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
 
        }
    
        showTestExecution(folderName){
          this.valid=true;
          this.module.createFolder(folderName).subscribe(moduleData =>{this.importMessage=moduleData;this.importData(this.importMessage)});
        // alert(ss)
        //alert(folderName+"ll")
          //this.module.createFolder(folderName)
//alert("2")
<<<<<<< HEAD
   this.show = false;
   this.testExecution=true;
   this.mo=false;
   this.execute=false;
=======
console.log(this.importMessage+"oppppu")
if(this.importMessage!="Succesffully CreateDbs"){
 this.importMessage="Please Wait While Files Are Synchronizing"


}
// else{
//   this.show = false;
//    this.testExecution=true;
//    this.mo=false;
//    this.execute=false;
//  // this.importMessage="Please Wait While Files Are Synchronizing "
// }


   
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
        }
        importData(data){
//console.log(data)
          this.importMessage=data
           this.show = false;
   this.testExecution=true;
   this.mo=false;
   this.execute=false;
   this.valid=false;

}

        goCreateModule(){
          //var displayModule:string
          this.displayModule=true;
          this.displayFeature=false;
          this.displayImport=false;
          //alert("yy")
          //this.router.navigate(['CreateModule'],{relativeTo:this.route})
        }
           goCreateFeature(){
          this.displayFeature=true;
          this.displayModule=false;
          this.displayImport=false;
        }
       goImport(){
         //alert("1st")
          this.displayImport=true;
          this.displayModule=false;
          this.displayFeature=false;
        }

        mobile(){
          this.mo=true;
          this.execute=false;
          this.show=false;

        }

        execution(){
<<<<<<< HEAD
        this.execute=true;
           this.mo=false;
           this.show=false;
=======
          this.execute=true;
          this.mo=false;
          this.show=false;
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
        }

        connect(){
          this.con=true;
       } 

}
