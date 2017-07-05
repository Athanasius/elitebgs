import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EddbApiModule } from './eddb_api/eddb-api.module';
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page_not_found/page-not-found.component';
import { HomeComponent } from './home.component';

import { ToolbarService } from './shared/toolbar.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        EddbApiModule,
        SharedModule,
        AppRoutingModule,
        MdToolbarModule,
        MdButtonModule,
    ],
    providers: [ToolbarService],
    bootstrap: [AppComponent]
})
export class AppModule { }
