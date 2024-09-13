import { Component } from '@angular/core';
import { MessageType } from 'src/app/app-enums.config';

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.scss']
})
export class MessageBannerComponent {
    message = ''
    messageType = MessageType.SUCCESS
    show = false

    showBanner(show: boolean){
      this.show = show
    }
}

