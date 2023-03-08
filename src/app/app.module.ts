import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AlbumsModule } from './albums/albums.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/state/dashboard.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreFacadeService } from './store/store-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomSerializer } from './store/router/custom-serializer';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    imports:      [BrowserModule, 
                   HttpClientModule,
                   FormsModule,
                   AppRoutingModule,  
                   AlbumsModule, 
                   StoreModule.forRoot(appReducer),
                   EffectsModule.forRoot([]),
                   EffectsModule.forFeature([DashboardEffects]),
                   StoreRouterConnectingModule.forRoot({
                    serializer: CustomSerializer,
                  }),
                ],
    declarations: [AppComponent, DashboardComponent],
    providers: [StoreFacadeService],
    bootstrap:    [AppComponent],
})
export class AppModule {}