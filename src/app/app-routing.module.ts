import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { TemplateComponent } from './views/template/template.component';


import { UsersComponent } from './views/users/users.component';

/*const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: () => import ('./auth/auth.module').then((m) => m.AuthModule)
  },
 
   
    
  ];*/

  const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'template',
      component: TemplateComponent
    },
    {
      path:'layout',
      component:LayoutComponent,
      children:[
        {
         path:'sidebar',
         component:SidebarComponent,
        }
      ]
    }
   
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
