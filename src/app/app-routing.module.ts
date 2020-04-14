import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomPageComponent } from './room-page/room-page.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'room/:roomKey',
        component: RoomPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
