import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  data = {
    title: 'My Angular Course',
  };

  onLogoClicked() {
    alert('Logo clicked');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
