import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ControlFlowComponent } from './control-flow/control-flow-component';
import { DeferrableComponent } from './defer/deferrable-component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello Angularians !</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>

    <h2> &#64;Defer </h2>
    <app-deferrable-component></app-deferrable-component>
    
    <!-- @defer {
      <app-deferrable-component></app-deferrable-component>
    } -->

    &nbsp;
    <app-control-flow-component></app-control-flow-component>

    <!-- @defer {
      <app-control-flow-component></app-control-flow-component>
    } -->

    &nbsp;
    
  `,
  imports: [ControlFlowComponent, DeferrableComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
