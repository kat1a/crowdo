import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RegisterModule } from './register/register.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsModule } from './projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    UiModule,
    RegisterModule,
    HomeModule,
    ProjectsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' , redirectTo:'/home',pathMatch:'full'}
    ])

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
