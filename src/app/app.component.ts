import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appProperties } from './app-msgs.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = appProperties.app_name;

  constructor(private titleService: Title){
    this.titleService.setTitle(this.title)
  }
}
