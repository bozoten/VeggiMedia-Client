import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MediaComponent } from './app/component/media/media.component';

bootstrapApplication(MediaComponent, appConfig)
  .catch((err) => console.error(err));
