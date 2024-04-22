import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
/*
  key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',*/
  
  sidBarMenu: any;
  sidebarVisible: boolean = true;
  files: any;
  constructor(private router: Router, private route: ActivatedRoute) {

  } 
  ngOnInit(): void {
    this.InitializedMenu();
    throw new Error('Method not implemented.');
  }
  navigateToRoute(key: string) {
    switch (key) {
      case '0':
        this.router.navigate(['/template']);
        break;
      case '1':
        this.router.navigate(['/offre']);
        break;
      case '3':
        this.router.navigate(['/pack']);
        break;
      case '4':
        this.router.navigate(['/dashboard']);
        break;
      default:
        break;
    }
  }
  
  InitializedMenu() {
    this.sidBarMenu = [
      {
        key: '0',
        label: 'User',
        data: 'User',
        icon: 'pi pi-fw pi-inbox',
        pushed: true,
        
      },
      {
        key: '1',
        label: 'Offre',
        data: 'Offre',
        icon: 'pi pi-fw pi-inbox',
        pushed: true,
        children: [
        ]
      },
      {
        key: '3',
        label: 'Pack',
        data: 'Pack',
        icon: 'pi pi-fw pi-inbox',
        pushed: true,
        children: [
        ]
      },
      {
        key: '4',
        label: 'Dashborad',
        data: 'Dashborad',
        icon: 'pi pi-fw pi-inbox',
        pushed: true,
        children: [
        ]
      },
    ]

  }

}
