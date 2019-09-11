import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [MineralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
