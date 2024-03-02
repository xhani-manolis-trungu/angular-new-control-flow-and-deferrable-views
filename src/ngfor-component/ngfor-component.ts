import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-ngfor-component',
    standalone: true,
    styles: ``,
    template: `
        <!-- Difference between  old and new ngFor loop -->
        <h4>Old *ngFor Loop</h4>

        <li *ngFor="let animal of animals; let i = index; trackBy: trackByMethod">
        {{animal}} -> index: {{i}}
        </li>

        <!-- Ng-containers below  -->

        <ng-container *ngIf="animals2.length">
            <li *ngFor="let animal of animals">{{animal}}</li>
        </ng-container>
        <ng-container *ngIf="!animals2.length">
            <li *ngFor="let animal of animals2">{{animal}}</li>
        </ng-container>

        <h4>New &#64;Loop</h4>
        @for (animal of animals; track animal) {
            <li>{{animal}} -> index: {{$index}}</li>
        }

        <h4>Empty Array</h4>
        @for (animal of animals2; track animals) {
            <li>{{animal}}</li>
        } @empty {
            <span>This is empty placeholder</span>
        }

        <hr />
    `,
    imports: [CommonModule]
})
export class NgForComponent {
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