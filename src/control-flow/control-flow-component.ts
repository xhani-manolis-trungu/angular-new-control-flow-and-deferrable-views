import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-component',
  standalone: true,
  styleUrl: `./control-flow-style.css`,
  templateUrl: `./control-flow-component.html`,
  imports: [CommonModule],
})
export class ControlFlowComponent {
  animals = ['dog', 'cat', 'rabbit', 'elephant', 'lion'];
  animals2 = [];
  shouldShowFirstSection = true;
  shouldShowSecondSection = false;

  contentType: string | undefined = 'IMAGE';

  setContentType(type?: string | undefined) {
    this.contentType = type;
  }

  setShowSections(showFirst: boolean, showSecond: boolean) {
    this.shouldShowFirstSection = showFirst;
    this.shouldShowSecondSection = showSecond;
  }

  showFirstSection() {
    this.setShowSections(true, false);
  }

  showSecondSection() {
    this.setShowSections(false, true);
  }

  showFallBackSection() {
    this.setShowSections(false, false);
  }

  trackByMethod(index: number, el: any): number {
    return el;
  }
}
