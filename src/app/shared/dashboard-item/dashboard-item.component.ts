import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  template: `
     <div class="dashboard-item">
     <article>
        <header>
          <img [src]="image().src" [alt]="image().alt" />
          <h2>{{ title()}}</h2>
        </header>
        <ng-content></ng-content>
     </article>
    </div>
  `,
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {

  image = input.required<{src: string, alt: string}>(); 
  title = input.required<string>();

}
