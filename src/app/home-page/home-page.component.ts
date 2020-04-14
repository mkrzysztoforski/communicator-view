import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/ConnectionService';
import { RoomModel } from '../services/room.model';
import { Router } from '@angular/router';
import { COLOR_MODE } from '../services/colorMode';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    colorMode = COLOR_MODE;

    constructor(private connectionService: ConnectionService, private router: Router) {
    }

    ngOnInit(): void {
    }

    createRoom(): void {
        this.connectionService.createRoom().subscribe((d: RoomModel) => {
            this.router.navigate(['/room/', d.hashKey]);
        });
    }

    connectWithExist(key: string) {
        this.router.navigate(['/room/', key]);
    }
}
