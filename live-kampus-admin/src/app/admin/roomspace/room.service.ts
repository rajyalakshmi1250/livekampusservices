import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable()
export class RoomService{
    baseUrl="/assets/jsondata/roomjson.json"

    constructor(private http:HttpClient){}

    
    findRoom():Observable<Room[]>{

        return this.http.get<Room[]>(this.baseUrl );

    }

    findRoomById(): Observable<Room[]> {
        return this.http.get<Room[]>(this.baseUrl);
    }
}