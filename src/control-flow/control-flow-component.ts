import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwitchComponent } from '../switch-component/switch-component';
import { IfComponent } from '../if-component/if-component';
import { NgForComponent } from '../ngfor-component/ngfor-component';

@Component({
  selector: 'app-control-flow-component',
  standalone: true,
  styleUrl: `./control-flow-style.css`,
  templateUrl: `./control-flow-component.html`,
  imports: [CommonModule, SwitchComponent, IfComponent, NgForComponent],
})
export class ControlFlowComponent {
}
