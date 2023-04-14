import { Component } from '@angular/core';
import { Ipost, Istd } from './shared/model/posts';
import { Iposts1 } from './shared/model/posts1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postsTask';
postsInfo: Array<Ipost> =[ 
 {
  title : "Angular 15 Sandalone Components",
  body  : "Angular 15 has New Feature Sandalone Components"
},
{
  title : "Angular 15 Sandalone HttpModule",
  body  : "Angular 15 has New Feature Sandalone HttpModule"
},
{
  title : "Angular 16 signals",
  body  : "Angular 16 has New Feature Single alternative for Rxjs Subject"
}
] 


posts1Info : Array<Iposts1> =[
        {
          title: "Latest thing in Angular",
          body : "Standalone APIs Allows the Creation of Multi-Route Application...."
        },
        {
          title : "Latest thing in React",
          body  : "Streaming Server Rendering..."},
        {
          title : "Latest thing in HTML", 
          body  : "Figure and figcaption"},
        {
          title : "Latest thing in css",
          body  :   "colors that match HD displays"
        },
        {
          title : "Latest thing in JavaScript",
          body  :   "ECMAScript 2022, the 13th and current version, was released in June 2022"
        }
]

stdArray: Array<Istd> = [
  {
    fName : "Virat",
    lName : "Kohli",
    email :  "viratkohli18@gmail.com",
    contact : 12345678
  },
  {
    fName : "Rohit",
    lName : "Sharma",
    email :  "rohitsharma45@gmail.com",
    contact : 12345678
  },
  {
    fName : "Sachin",
    lName : "Tendulkar",
    email :  "sachint10@gmail.com",
    contact : 12345678
  },
  {
    fName : "Yuvraj",
    lName : "Singh",
    email :  "yuvis12@gmail.com",
    contact : 12345678
  },
  {
    fName : "Hardik",
    lName : "Pandya",
    email :  "hardikp29@gmail.com",
    contact : 12345678
  },
  {
    fName : "Shubhaman",
    lName : "Gill",
    email :  "sg@gmail.com",
    contact : 12345678
  }  
];

fNameVal !: string;
lNameVal !: string;
emailVal !: string;
contactVal !: string;

onAddStudent(){
  // console.log(this.fNameVal);
  let obj : Istd ={
    fName: this.fNameVal,
    lName: this.lNameVal,
    email: this.emailVal,
    contact: +this.contactVal
  }
  this.stdArray.push(obj);

  this.fNameVal = '';
  this.lNameVal = '';
  this.emailVal = '';
  this.contactVal = '';

}
}





































































