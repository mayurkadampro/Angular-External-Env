import { Component } from '@angular/core';
import { EnvService } from './service/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private environment: EnvService
  ) { }
  title = this.environment.projectName;
}
