import { Component, input } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  template: ` 
         <p>
            <label>{{ label()}}</label>
            <ng-content select='input, textarea' />
         </p>
  `,
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
  
  label = input.required<string>();

}
