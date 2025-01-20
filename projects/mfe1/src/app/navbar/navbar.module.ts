import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './navbar.routes';
import { Component1Component } from './components/component-1/component-1.component';
import { Component2Component } from './components/component-2/component-2.component';
import { Component3Component } from './components/component-3/component-3.component';
import { Component4Component } from './components/component-4/component-4.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavbarModule { }
