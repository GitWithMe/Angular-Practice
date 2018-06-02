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
                <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" />

             
	`    //email is a template variable which refrences the input field 
   //  [(ngModel)] means two way binding and is usable by importing formsModule in app.module.ts       
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
}
