import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ConfigService } from './config/config.service';

const appConfigInitializer = (appConfig: ConfigService) => {
  return () => {
    const appconfigpath = '../config.json';
    return appConfig.loadConfig(appconfigpath);
  };
};


export const APP_CONFIG_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: appConfigInitializer,
  multi: true,
  deps: [ConfigService],
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot()
  ],
  providers: [APP_CONFIG_INITIALIZER],
  bootstrap: [AppComponent]
})
export class AppModule { }
