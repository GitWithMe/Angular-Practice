import { Component } from '@angular/core';

@Component({ 
	selector : 'course',
	
	template : `
               <h2>{{ title }}</h2> <strong>Title through interpolation</strong><br>
               <img src="{{ imageURL }}" /> Rendering image using Interpolation annd should be used while adding dynamic elements between headings <br>
               <img [src] = "imageURL" />   Rendering Image using property binding[src]<br>
               <button class ="btn btn-primary" [class.active]="isActive">Save</button>
               <p><strong>Dynamically binding a class to the button tag</strong></p><br>

               <button (click)="onClick($event)">Click Me</button><br>
               <input (keyup.enter) = "onEnter()" /><br>
                <input #gmail (keyup.enter) = "onEnterhere(gmail.value)" /><br>
                <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" /> <br>

                {{ course.title | uppercase }} <br/>
                {{ course.students | number }} <br/>
                {{ course.rating | number:'1.2-2'}} <br/>
                {{ course.price | currency:'₹':true:'3.2-2' }} <br/>
                {{ course.releaseDate | date:'shortDate' }} <br/>


             
	`    //email is a template variable which refrences the input field 
   //  [(ngModel)] means two way binding and is usable by importing formsModule in app.module.ts   
   /********************************************************
   *   Types of Pipes:
   *   1.)upperCase
   *   2.)lowerCase
   *   3.)decimal at line 20 means 1 digit number before decimal point and 2-2 means 2 digit after decimal
   *   4.)currency 
   *   5.)percent                                          
   *******************************************************/
})
export class CoursesComponent{
      title = "List of courses";
      imageURL = "https://picsum.photos/200/300/?random"
      isActive = true; //For class binding of active class for the bootstrap button
      email = "me@example.com";
      onClick($event){
         alert("Button was clicked"); //Event Binding in angular
         console.log($event); //EVent handllers simillar to JavaScript & jQuery
         //To Pr event event bubbeling use stopPropogation(); 
      }
      onEnter(){
         alert("Submitted!") //where (keyup.enter) is known as event Filtering
      }
      onEnterhere(gmail){
         console.log(gmail); //fetches the value from the input field with template filtering
      }
     onKeyUp(){
      console.log(this.email); //Implementing 2 way binding
     }
     course={  //Pipes DEMO
        title : "My Angular Practice",
        rating : 4.98,
        students : 3000,
        price : 700,
        releaseDate : new Date(2018, 3, 1)
     }
}
