import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  standalone: true,
  template: `
    Hi!

    <span *ngFor="let item of ['Angularians', 'Fellow Devs', 'Everyone']">
      <li>{{item}}</li>
    </span>
  `,
  imports: [CommonModule, NgFor]
})
export class SampleComponent {}
