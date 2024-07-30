import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
      <header>
        <div id="logo">
          <img src="logo.png" alt="Website logo, a server" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Management</a>
            </li>
            <li>
              <button>
                <span>
                  Logout
                </span>
                <span class="icon">
                  →
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
