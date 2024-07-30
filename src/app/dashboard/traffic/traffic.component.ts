import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  template:`
        <div id="traffic">
          <p>Last 7 days</p>

          <div id="chart">
            @for (dataPoint of dummyTrafficData; track dataPoint.id) {
            <div
              [style.height]="(dataPoint.value / maxTraffic) * 100 + '%'"
            ></div>
            }
          </div>
      `,
    styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

}
