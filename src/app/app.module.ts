import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { DashboardModule } from '../dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports:      [BrowserModule, FormsModule, DashboardModule, AppRoutingModule ], // import Angular's BrowserModule
    declarations: [AppComponent],
    bootstrap:    [AppComponent],  // indicate the bootstrap component// register our component with the module
})
export class AppModule {}