import { Component, input, viewChild, ViewEncapsulation } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NewTicketComponent],
  template:`
              <app-new-ticket />
            
  `,
  host: {
    id: 'new-ticket'
  },
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
