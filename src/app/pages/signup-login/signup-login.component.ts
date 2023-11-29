import { Component } from '@angular/core';
import { faTwitter, faFacebook, faGoogle, faApple, } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faApple = faApple;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;

}
