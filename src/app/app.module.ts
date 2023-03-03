import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';


@NgModule({
    imports:      [BrowserModule ], // import Angular's BrowserModule
    bootstrap:    [AppComponent],  // indicate the bootstrap component
    declarations: [AppComponent] // register our component with the module
})
export class AppModule {}