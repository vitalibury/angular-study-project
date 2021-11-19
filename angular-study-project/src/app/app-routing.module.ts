import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {path: '', component: AppComponent,
  // children: [
  //   {path: '', redirectTo: '/', pathMatch: 'full'},
  //   {path: '', component: ContactListComponent},
  //   {path: 'cards', component: ContactCardsComponent},
  //   {path: 'about', component: AboutComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
