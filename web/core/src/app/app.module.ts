import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {HotkeyModule} from 'angular2-hotkeys';

import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzIconModule.forRoot(icons),
    HotkeyModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: NZ_ICONS,
    useValue: icons
  }, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
