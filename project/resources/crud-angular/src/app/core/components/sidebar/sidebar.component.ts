import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Home',
      icon: 'fa-dashboard',
      route: '/home',
      isOpen: false,
      submenu: []
    },
    {
      label: 'Provisioning',
      icon: 'fa-gear',
      route: null,
      isOpen: true,
      submenu: [
        { label: 'sale', route: '/sale' },
      ]
    },
    {
      label: 'Ticketing',
      icon: 'fa-gear',
      route: null,
      isOpen: true,
      submenu: [
        { label: 'ticket', route: '/ticket' }
      ]
    },
    {
      label: 'Users',
      icon: 'fa-gear',
      route: null,
      isOpen: true,
      submenu: [
        { label: 'user', route: '/user' },
        { label: 'client', route: '/client' }
      ]
    },
    {
      label: 'Materials',
      icon: 'fa-gear',
      route: null,
      isOpen: true,
      submenu: [
        { label: 'material', route: '/material' },
      ]
    }
  ];

  toggleSubmenu(item: any) {
    item.isOpen = !item.isOpen;
  }
}