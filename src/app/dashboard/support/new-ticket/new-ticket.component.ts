import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from '../../../shared/controls/controls.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent],
  template: `
      <form>
        <p controls>
          <label ngProjectAs="label">Title</label>
          <input name="title" id="title" />
        </p>
        <p controls>
          <label ngProjectAs="input">Request</label>
          <textarea name="request" id="request" rows="3"></textarea>
        </p>
        <p>
          <button appButton>
            <span ngProjectAs="text">Submit</span>
            <span class="icon" ngProjectAs="icon">⌲</span>
          </button>
        </p>
      </form>
  `,
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
