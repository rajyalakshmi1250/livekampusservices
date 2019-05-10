import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 
@Component({
    //selector:"view-roomspace",
    templateUrl:"./view.component.html",
    styleUrls: ['./view.component.css']
})
 export class ViewRoomSpaceComponent {
    constructor( private route: ActivatedRoute) { }
    ngOnInit():void{}

 }