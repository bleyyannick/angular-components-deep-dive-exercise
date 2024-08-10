import { Component, ElementRef, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from '../../../shared/controls/controls.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent, FormsModule],
  template: `
      <form #form  (ngSubmit)="onSubmit()">
        <app-controls  label="Title">
          <input name="title" id="title" #titleInput />
       </app-controls>
        <app-controls  label="Request">
          <textarea name="request" id="request" rows="3" #requestInput></textarea>
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
  form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit() {
    console.log('Submitted');
     this.form().nativeElement.reset();
  }

}
