import { Component, DestroyRef, OnInit } from '@angular/core';


interface ServerStatus {
  status: 'offline' | 'online' | 'unknown';
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  template:`
        <div [class]="{
         status: true, 
         'status-online': currentStatus === 'online',
         'status-offline': currentStatus === 'offline',
         'status-unknown': currentStatus === 'unknown'
        }">
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
export class ServerStatusComponent implements OnInit  {
  
  currentStatus: ServerStatus["status"] = 'online';
  private interval?: ReturnType<typeof setTimeout>;

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.interval = setInterval(()=> {
      const random = Math.random();
      if (random < 0.3) {
        this.currentStatus = 'offline';
      } else if (random < 0.6) {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

 
  

  

  
  

}
