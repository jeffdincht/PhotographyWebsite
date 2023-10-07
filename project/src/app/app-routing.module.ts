import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PregnantComponent } from './pages/pregnant/pregnant.component';
import { NewbornComponent } from './pages/newborn/newborn.component';
import { BabyComponent } from './pages/baby/baby.component';
import { FamilyComponent } from './pages/family/family.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mim', component: AboutComponent },
  { path: 'gravidas', component: PregnantComponent },
  { path: 'recem-nascido', component: NewbornComponent },
  { path: 'bebe', component: BabyComponent },
  { path: 'familias', component: FamilyComponent },
  { path: 'contacto', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
