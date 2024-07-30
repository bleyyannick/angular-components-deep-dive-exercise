import { Component } from '@angular/core';

@Component({
  selector: 'p[controls]',
  standalone: true,
  imports: [],
  template: ` 
          <ng-content select="label"></ng-content>
          <ng-content />
  `,
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

}
