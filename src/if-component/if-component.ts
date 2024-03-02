import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwitchComponent } from '../switch-component/switch-component';

@Component({
  selector: 'app-if-component',
  standalone: true,
  styles: `
    #section1,
    #section2,
    #fallback {
        height: 2em;
        width: fit-content;
        margin: auto;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        justify-content: center;
    }

    #section1 {
        background-color: darkgray;
    }

    #section2 {
        background-color: gold;
    }

    #fallback {
        background-color: tomato;
    }
  `,
  template: `
    <section>
        <h5>Change conditions:</h5>
        <span>
            <button (click)="showFirstSection()">1st Section</button>
        </span>

        <span>
            <button (click)="showSecondSection()">2nd Section</button>
        </span>

        <span>
            <button (click)="showFallBackSection()">FallBack Section</button>
        </span>
    </section>
    <hr />
    <!-- Difference in size on the template betweeb old and new NgIf -->

    <h4>Old <u>*NgIf</u> directive:</h4>
    <section *ngIf="shouldShowFirstSection" id="section1">1st section</section>

    <section *ngIf="!shouldShowFirstSection && shouldShowSecondSection" id="section2">
        2nd section
    </section>

    <section *ngIf="!shouldShowFirstSection && !shouldShowSecondSection" id="fallback">
    FallBack Section
    </section>

    <p>(check Elements on Dev tools)</p>

    <h4>New <u>&#64;if</u> directive:</h4>
    @if (shouldShowFirstSection) {
    <section id="section1">1st Section</section>
    } @else if (!shouldShowFirstSection && shouldShowSecondSection) {
    <section id="section2">2nd Section</section>
    } @else {
    <section id="fallback">FallBack Section</section>
    }

    <hr />
  `,
  imports: [CommonModule, SwitchComponent],
})
export class IfComponent {
  animals = ['dog', 'cat', 'rabbit', 'elephant', 'lion'];
  animals2 = [];
  shouldShowFirstSection = true;
  shouldShowSecondSection = false;

  

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
