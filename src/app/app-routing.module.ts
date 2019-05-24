import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from '../pages/play/play.component';

const routes: Routes = [
  { path: '', redirectTo: '/player', pathMatch: 'full' },
  { path: 'player', component: PlayComponent },
  // { path: '**', component: ErrorPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  useHash: false  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
