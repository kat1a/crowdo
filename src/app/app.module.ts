import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RegisterModule } from './register/register.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    UiModule,
    RegisterModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
