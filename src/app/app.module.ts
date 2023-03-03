import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AlbumsComponent } from '../albums/albums.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
    imports:      [BrowserModule, FormsModule ], // import Angular's BrowserModule
    declarations: [AppComponent, AlbumsComponent, DashboardComponent],
    bootstrap:    [AppComponent],  // indicate the bootstrap component// register our component with the module
})
export class AppModule {}