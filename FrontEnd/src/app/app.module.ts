import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/acceuil/home/home.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {BarreMenuComponent} from './components/acceuil/barre-menu/barre-menu.component';
import {AgendaComponent} from './components/acceuil/agenda/agenda.component';
import {FormationComponent} from './components/acceuil/formation/formation.component';
import {CampusComponent} from './components/acceuil/campus/campus.component';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {ChiffreComponent} from './components/acceuil/chiffre/chiffre.component';
import {ConclusionComponent} from './components/acceuil/conclusion/conclusion.component';
import {EndComponent} from './components/acceuil/end/end.component';
import {UniversityComponent} from './components/acceuil/university/university.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {InscriptionComponent} from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { CompteEtudiantComponent } from './components/compte-etudiant/compte-etudiant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ModifieEtudiantComponent } from './components/modifie-etudiant/modifie-etudiant.component';
import { CompteAdminComponent } from './components/compte-admin/compte-admin.component';
import { AdminModifieEtudiantComponent } from './components/admin-modifie-etudiant/admin-modifie-etudiant.component';
import { ModifieAdminComponent } from './components/modifie-admin/modifie-admin.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    BarreMenuComponent,
    AgendaComponent,
    FormationComponent,
    CampusComponent,
    ChiffreComponent,
    ConclusionComponent,
    EndComponent,
    UniversityComponent,
    PageNotFoundComponent,
    InscriptionComponent,
    HomeComponent,
    LoginComponent,
    CompteEtudiantComponent,
    ModifieEtudiantComponent,
    CompteAdminComponent,
    AdminModifieEtudiantComponent,
    ModifieAdminComponent,
   
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgbPaginationModule, NgbAlertModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'inscription', component: InscriptionComponent},
      {path: 'login', component: LoginComponent},
      {path: 'CompteEtudiant', component: CompteEtudiantComponent},
      {path: 'modifieEtudiant', component: ModifieEtudiantComponent},
      {path: 'modifieAdmin', component: ModifieAdminComponent},
      {path: 'AdminmodifieEtudiant', component: AdminModifieEtudiantComponent},
      {path: 'CompteAdmin', component: CompteAdminComponent},
      
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
