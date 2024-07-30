import { Component, input } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NewTicketComponent],
  template:`
            <div id="new-ticket">
              <app-new-ticket />
            </div>
            
  `,
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
