import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomepComponent } from './homep/homep.component';
import { MusicaComponent } from './musica/musica.component';
import { NavComponent } from './nav/nav.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
      path:'',
      component: HomepComponent,

  },
  {
    path: 'musica',
    component: MusicaComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
