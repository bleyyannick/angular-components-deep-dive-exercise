import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  template: `
              <ng-content select="text" />
              <ng-content select="icon" />

  `,

  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
