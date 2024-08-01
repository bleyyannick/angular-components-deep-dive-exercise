import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from '../../../shared/controls/controls.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent],
  template: `
      <form>
        <app-controls  label="Title">
          <input name="title" id="title" />
       </app-controls>
        <app-controls  label="Request">
          <textarea name="request" id="request" rows="3"></textarea>
       </app-controls>
       <p>
          <button appButton>
            <span ngProjectAs="text">Submit</span>
            <span class="icon" ngProjectAs="icon"> ⌲ </span>
          </button>
      </p>      
      </form>
  `,
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
