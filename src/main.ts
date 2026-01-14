import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app';
import { LoginComponent } from './app/pages/login/login';
import { LobbyComponent } from './app/pages/lobby/lobby';
import { RegisterComponent } from './app/pages/register/register';
import { AuthLayoutComponent } from './app/layouts/auth-layout/auth-layout';
import { GameComponent } from './app/pages/game/game';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'lobby', component: LobbyComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'game', component: GameComponent }, // 👈 ESTA ES CLAVE
    ]),
  ],
}).catch((err) => console.error(err));
