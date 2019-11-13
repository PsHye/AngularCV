import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SkillsComponent } from './skills/skills.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [
        AppComponent,
        SkillsComponent
    ],
    imports: [
        MatIconModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatRadioModule,
        MatGridListModule,
        MatCardModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
