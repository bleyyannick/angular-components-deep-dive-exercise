import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent],
  template: `
      <form>
        <p>
          <label>Title</label>
          <input name="title" id="title" />
        </p>
        <p>
          <label>Request</label>
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
