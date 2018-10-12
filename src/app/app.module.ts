import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';

import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {CursoService} from './services/curso.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursoComponent,
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebase, 'Actividad4'),
      AngularFirestoreModule,
      FormsModule

  ],
  providers: [
      CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
