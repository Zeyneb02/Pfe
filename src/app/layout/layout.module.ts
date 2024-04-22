import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SidebarComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
   CalendarModule,
    DialogModule,
    TreeModule
     
  ], 
  exports: [SidebarComponent]
})
export class LayoutModule { }
