import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PlayComponent } from '../pages/play/play.component';
import { DataAccessService } from '../providers/data-access.service';
import { ScoringPipe } from '../providers/scoring.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ScoringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataAccessService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
