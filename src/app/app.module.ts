import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomepComponent } from './homep/homep.component';
import { MusicaComponent } from './musica/musica.component';
import { NavComponent } from './nav/nav.component';
import { SeriesComponent } from './series/series.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepComponent,
    MusicaComponent,
    NavComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
