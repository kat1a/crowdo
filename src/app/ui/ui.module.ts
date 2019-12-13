import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent
  ]
})
export class UiModule { }
