import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SampleComponent } from '../sample-component/sample-component';

@Component({
  selector: 'app-deferrable-component',
  standalone: true,
  styleUrl: `./deferrable-style.css`,
  templateUrl: `./deferrable-component.html`,
  imports: [CommonModule, SampleComponent],
})
export class DeferrableComponent {
  isVisible = false;
}
