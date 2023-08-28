import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'ql-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppsComponent implements OnInit {
  modules: any;
  searchInput: any;
  filterModules: any;
  constructor(private readonly router: Router, private readonly hotkeysService: HotkeysService) { }

  ngOnInit(): void {
    this.modules = [
      {
        desc: 'Analytics of all modules',
        path: 'overview',
        shortcut: 'shift+o',
        name: 'Dashboards',
        icon: 'dashboard',
        keywords: ['reports', 'analytics', 'dashboard', 'overview']
      },
      // {
      //   desc: 'Manage your Profile',
      //   path: 'myprofile',
      //   shortcut: 'shift+s',
      //   name: 'Self Service Portal',
      //   icon: 'user',
      //   keywords: []
      // },
      // {
      //   desc: 'Access Mail & Conversations',
      //   path: 'connect',
      //   shortcut: 'shift+c',
      //   name: 'Connect',
      //   icon: 'comment',
      //   keywords: []
      // },
      {
        desc: 'Hiring, Attandance, Leaves',
        path: 'hr/analytics',
        shortcut: 'shift+h',
        name: 'HR Management',
        icon: 'solution',
        keywords: []
      },
      {
        desc: '1:1 Meetings, Reviews & More',
        path: 'resources',
        shortcut: 'shift+r',
        name: 'My Resources',
        icon: 'team',
        keywords: []
      },
      {
        desc: 'Assets, workflows & more',
        path: 'overview',
        shortcut: 'shift+a',
        name: 'Admin',
        icon: 'setting',
        keywords: []
      },
      {
        desc: 'Project Management & Risks',
        path: 'entities',
        shortcut: 'shift+p',
        name: 'Portfolio Management',
        icon: 'appstore',
        keywords: []
      },
      {
        desc: 'Payroll, Invoicing & More',
        path: 'accounts',
        shortcut: 'shift+m',
        name: 'Accounting',
        icon: 'audit',
        keywords: []
      }
    ];
    this.filterModules = this.modules;
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
    this.router.navigate([`/console/dashboard/${path}`])
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/dashboard/${path}`])
    // );
    // window.open(url, '_blank');
  }

  search(event: any): void {
    this.searchInput = event;
    const regEx = new RegExp(this.searchInput, 'gmi');
    if (this.searchInput !== '' && this.searchInput.length > 3) {
      this.filterModules = this.modules.filter((each: any) => {
        console.log(regEx, each.name.match(regEx))
        console.log(each.desc.match(regEx) || each.name.match(regEx) || (each.keywords.filter((keyword: string) => keyword.match(regEx))).length > 0);
        if (each.desc.match(regEx) || each.name.match(regEx) || (each.keywords.filter((keyword: string) => keyword.match(regEx))).length > 0) {
          return each;
        }
      });
    } else {
      this.filterModules = this.modules;
    }
  }
}
