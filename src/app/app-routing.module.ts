import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NhomeComponent } from './components/nhome/nhome.component';
import { PreciosComponent } from './components/precios/precios.component';
import { NprotegidaComponent } from './components/nprotegida/nprotegida.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuard } from "./auth.guard";


const routes: Routes = [
  { path: 'home', component : NhomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegida', component: NprotegidaComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
