import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MineralComponent } from './mineral/mineral.component';

import {MineralService} from './mineral.service';

@NgModule({
  declarations: [
    AppComponent,
    MineralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MineralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
