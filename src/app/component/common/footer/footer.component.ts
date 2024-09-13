import { Component } from '@angular/core';
import { appProperties } from 'src/app/app-msgs.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerText = appProperties.en_footer
}
