
import { LogSignUpComponent } from './log-sign-up/log-sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';
import { Routes, RouterModule } from '@angular/router';

const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  //'/home', pathMatch: 'full
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LogSignUpComponent },
  { path: 'forgot', component: ForgotComponent },

];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
