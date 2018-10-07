import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [{
  path: 'auth',
  loadChildren: './core/auth/auth.module#AuthModule'
}, {
  path: '',
  component: HomeComponent,
  loadChildren: './feature/feature.module#FeatureModule',
  canActivate: [AuthGuard]
},
{
  path: '**', component: NotFoundComponent,
  data: {
    title: 'NOT FOUND'
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
