import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [],
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
          <button>
            <span>
              Submit
            </span>
            <span class="icon">
              ⌲
            </span>
          </button>
        </p>
      </form>
  `,
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
