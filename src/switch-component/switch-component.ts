import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-switch-component',
    standalone: true,
    styles: `
        .placeholder-wrapper {
            width: 100px;
            height: 100px;
        }

        .load-wraper {
            position: relative;
            height: 100%;
            width: 100%;
            background-color: rgb(211, 211, 211);
            z-index: 44;
            overflow: hidden;
            border-radius: 5px;
        }
        .activity {
            position: absolute;
            left: -45%;
            height: 100%;
            width: 45%;
            background-image: linear-gradient(
                to left,
                rgba(251, 251, 251, 0.05),
                rgba(251, 251, 251, 0.3),
                rgba(251, 251, 251, 0.6),
                rgba(251, 251, 251, 0.3),
                rgba(251, 251, 251, 0.05)
            );
            background-image: -moz-linear-gradient(
                to left,
                rgba(251, 251, 251, 0.05),
                rgba(251, 251, 251, 0.3),
                rgba(251, 251, 251, 0.6),
                rgba(251, 251, 251, 0.3),
                rgba(251, 251, 251, 0.05)
            );
            background-image: -webkit-linear-gradient(
                to left,
                rgba(251, 251, 251, 0.05),
                rgba(251, 251, 251, 0.3),
                rgba(251, 251, 251, 0.6),
                rgba(251, 251, 251, 0.3),
                rgba(251, 251, 251, 0.05)
            );
            animation: loading 1s infinite;
            z-index: 45;
        }

        @keyframes loading {
            0% {
                left: -45%;
            }
            100% {
                left: 100%;
            }
        }
    `,
    template: `
            <div style="padding-top: 2em">
        <span>
            <button (click)="setContentType('IMAGE')">Static Image</button>
        </span>

        <span>
            <button (click)="setContentType('GIF')">GIF</button>
        </span>

        <span>
            <button (click)="setContentType()">Alt text</button>
        </span>
        </div>

        <hr />

        <h4>Old *switch directive:</h4>
        <div>
        <span [ngSwitch]="contentType">
            <div *ngSwitchCase="'IMAGE'" class="placeholder-wrapper">
            <img
                src="https://cdn-images-1.medium.com/max/184/1*uJa0SU-F2NXVKhHTbP1HBw@2x.png"
                alt="angular logo"
            />
            </div>
            <div *ngSwitchCase="'GIF'" class="placeholder-wrapper">
            <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFvNWM2NmQ2NGVuZjlqbXpjMnZ1Ym0zbHMyMG1yMTc3Y2FvZHh3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i6IqXuLaTdqRW/giphy.gif"
            />
            </div>
            <div *ngSwitchDefault class="placeholder-wrapper">
            <div class="load-wraper">
                <div class="activity"></div>
            </div>
            </div>
        </span>
        </div>
        <h4>New *switch directive:</h4>
        <div>
            <span>
                @switch(contentType) { 
                    @case ('IMAGE') {
                        <div class="placeholder-wrapper">
                            <img
                            src="https://cdn-images-1.medium.com/max/184/1*uJa0SU-F2NXVKhHTbP1HBw@2x.png"
                            alt="angular logo"
                            />
                        </div>
                    } @case ('GIF') {
                        <div class="placeholder-wrapper">
                            <img
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmFvNWM2NmQ2NGVuZjlqbXpjMnZ1Ym0zbHMyMG1yMTc3Y2FvZHh3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i6IqXuLaTdqRW/giphy.gif"
                            />
                        </div>
                    } @default {
                        <div class="placeholder-wrapper">
                            <div class="load-wraper">
                            <div class="activity"></div>
                            </div>
                        </div>
                    } 
                }
            </span>
        </div>
    `,
    imports: [CommonModule]
})
export class SwitchComponent {
    contentType: string | undefined = 'IMAGE';

    setContentType(type?: string | undefined) {
        this.contentType = type;
      }
}