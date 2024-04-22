import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './views/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './views/template/template.component';
import { LoginComponent } from './views/login/login.component';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { DialogModule } from 'primeng/dialog';
import { LayoutModule } from './layout/layout.module';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    UsersComponent,
    TemplateComponent,
    LoginComponent,
    LayoutComponent,
  

    
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
   CalendarModule,
    DialogModule,
    LayoutModule 

    
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
