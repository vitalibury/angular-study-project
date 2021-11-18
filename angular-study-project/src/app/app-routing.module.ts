import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent,
  children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: ContactListComponent},
    {path: 'cards', component: ContactCardsComponent},
    {path: 'about', component: AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
