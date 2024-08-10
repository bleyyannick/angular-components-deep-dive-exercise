import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  template:`
          @if (currentStatus === 'online') {
          <p>Servers are online</p>
          <p>All systems are operational.</p>
          } @else if (currentStatus === 'offline') {
          <p>Servers are offline</p>
          <p>Functionality should be restored soon.</p>
          } @else {
          <p>Server status is unknown</p>
          <p>Fetching server status failed.</p>
          }
  `,
  host: {
    id: 'status'
  }, 
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';

  constructor() {
    setInterval(()=> {
      
    })
  }

}
