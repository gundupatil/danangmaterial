
import { LogSignUpComponent } from './log-sign-up/log-sign-up.component';
import { Routes, RouterModule } from '@angular/router';

const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  //'/home', pathMatch: 'full
  // { path: '', redirectTo: '/fishpage', pathMatch: 'full' },

  { path: 'login', component: LogSignUpComponent },




];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
