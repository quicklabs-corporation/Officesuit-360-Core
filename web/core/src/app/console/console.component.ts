import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'ql-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ConsoleComponent implements OnInit {
  modules: any;
  constructor(private readonly router: Router, private readonly hotkeysService: HotkeysService) { }

  ngOnInit(): void {
    this.modules = [
      {
        desc: 'Analytics of all modules',
        path: 'overview',
        shortcut: 'shift+o',
        name: 'Dashboards',
        icon: 'dashboard'
      },
      {
        desc: 'Manage your Profile',
        path: 'myprofile',
        shortcut: 'shift+s',
        name: 'Self Service Portal',
        icon: 'user'
      },
      {
        desc: 'Access Mail & Conversations',
        path: 'connect',
        shortcut: 'shift+c',
        name: 'Connect',
        icon: 'comment'
      },
      {
        desc: 'Hiring, Attandance, Leaves',
        path: 'hr/analytics',
        shortcut: 'shift+h',
        name: 'HR Management',
        icon: 'solution'
      },
      {
        desc: '1:1 Meetings, Reviews & More',
        path: 'resources',
        shortcut: 'shift+r',
        name: 'My Resources',
        icon: 'team'
      },
      {
        desc: 'Assets, workflows & more',
        path: 'overview',
        shortcut: 'shift+a',
        name: 'Admin',
        icon: 'setting'
      },
      {
        desc: 'Project Management & Risks',
        path: 'entities',
        shortcut: 'shift+p',
        name: 'Portfolio Management',
        icon: 'appstore'
      },
      {
        desc: 'Payroll, Invoicing & More',
        path: 'accounts',
        shortcut: 'shift+m',
        name: 'Accounting',
        icon: 'audit'
      }
    ];

    this.modules.forEach((module: any) => {
      this.addKeyboadShortCut(module.shortcut, module.path, module.desc);
    });

  }

  addKeyboadShortCut(key: string, module: string, description?: string | ''): void {
    this.hotkeysService.add(new Hotkey(key, (event: KeyboardEvent): boolean => {
      this.navigateTo(module);
      return false;
    }, undefined, description));
  }

  navigateTo(path: string): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/dashboard/${path}`])
    );
    window.open(url, '_blank');
  }
}
