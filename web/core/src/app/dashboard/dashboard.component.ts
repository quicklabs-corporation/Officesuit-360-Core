import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'ql-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  selectedModule: string = 'overview';
  constructor(private readonly router: Router, private readonly hotkeysService: HotkeysService) {
    this.addKeyboadShortCut('fn+c', 'connect', 'Open Connect');
    this.addKeyboadShortCut('fn+h', 'hr/analytics', 'Open HR Management');
    this.addKeyboadShortCut('fn+r', 'resources', 'Open Employee Management');
    this.addKeyboadShortCut('fn+o', 'overview', 'Show Dashboard Overview');
    this.addKeyboadShortCut('fn+p', 'myprofile', 'Open My Profile');
    this.addKeyboadShortCut('fn+a', 'admin', 'Open Admin Module');
    this.addKeyboadShortCut('fn+i', 'accounts', 'Open Accounts & Payroll');
    this.addKeyboadShortCut('fn+e', 'entities', 'Open Project Management');
    this.addKeyboadShortCut('fn+q', 'services', 'Open Service Management');
  }

  addKeyboadShortCut(key: string, module: string, description?: string | ''): void {
    this.hotkeysService.add(new Hotkey(key, (event: KeyboardEvent): boolean => {
      this.navigateTo(module);
      return false;
    }, undefined, description));
  }

  ngOnInit(): void {
    this.router.navigate([`/dashboard/${this.selectedModule}`]).then(() => { })
  }

  navigateTo(path: string): void {
    this.selectedModule = path;
    this.router.navigate([`/dashboard/${path}`]).then(() => { })
  }
}
