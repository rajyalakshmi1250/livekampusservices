import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from './room';
import { RoomService } from './room.service';




@Component({
    templateUrl:"./roomspace.component.html",
    styleUrls:["./roomspace.component.css"]
    //selector:"roomspace"
})

export class RoomSpaceComponent {

    room:Room[];
    constructor( private roomService:RoomService,
        private route: ActivatedRoute) { }
    ngOnInit():void{
        //we have to read the route parameters
        this.route.paramMap.subscribe((map)=>{
            let roomId=Number(map.get("roomId")); 
            console.log(roomId); 
            this.roomService.findRoomById().subscribe((data)=>{
                this.room=data;

            })  
    })
}
}
