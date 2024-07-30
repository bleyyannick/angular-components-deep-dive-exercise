import { Component, input } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NewTicketComponent],
  template:`
            <div id="status">
              <p>Todo...</p>
            </div>
            <app-new-ticket />
  `,
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
