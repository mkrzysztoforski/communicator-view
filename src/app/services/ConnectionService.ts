import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {
    private url: string = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {
    }

    public createRoom() {
        return this.http.get(this.url + '/create/room');
    }

    public createMember(roomKey: string, nick: string) {
        return this.http.get(this.url + '/create/member/' + roomKey + '/' + nick);
    }

    public sendMessage(roomKey: string, nickHashId: string, message: string) {
        return this.http.get(this.url + '/send/message/' + roomKey + '/' + nickHashId + '/' + message);
    }

    public getMessages(roomKey: string, nickHashId: string) {
        return this.http.get(this.url + '/stream/' + roomKey + '/' + nickHashId);
    }

    public getMembers(roomKey: string, nickHashId: string) {
        return this.http.get(this.url + '/stream/members/' + roomKey + '/' + nickHashId);
    }

    public logMember(roomKey: string, nickHashId: string) {
        return this.http.get(this.url + '/log/member/' + roomKey + '/' + nickHashId);
    }
}
