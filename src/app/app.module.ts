import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './services/ConnectionService';
import { AlgorithmsService } from './services/AlgorithmsService';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        RoomPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [ConnectionService, AlgorithmsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
