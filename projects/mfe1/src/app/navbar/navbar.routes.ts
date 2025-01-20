import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Component1Component } from './components/component-1/component-1.component';
import { Component2Component } from './components/component-2/component-2.component';
import { Component3Component } from './components/component-3/component-3.component';
import { Component4Component } from './components/component-4/component-4.component';
import { DemoComponent } from './components/demo/demo.component';
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'component1', component: Component1Component },
      { path: 'component2', component: Component2Component },
      { path: 'component3', component: Component3Component },
      { path: 'component4', component: Component4Component },
      {path: 'demo', component: DemoComponent},
    ],
  },
];
