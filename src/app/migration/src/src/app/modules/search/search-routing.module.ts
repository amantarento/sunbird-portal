import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeSearchComponent, UserSearchComponent, UserEditComponent, UserProfileComponent,
  UserDeleteComponent, OrgSearchComponent
} from './components';
const routes: Routes = [
  {
    path: 'search/All/:pageNumber', component: HomeSearchComponent, data: { name: 'All' }
  },
  {
    path: 'search/Users/:pageNumber', component: UserSearchComponent, data: { name: 'Users' },
    children: [
      { path: 'edit/:userId', component: UserEditComponent },
      { path: 'delete/:userId', component: UserDeleteComponent, data: { name: 'Users' } }
    ]
  },
  {
    path: 'search/Users/:pageNumber/view/:userId', component: UserProfileComponent, data: { name: 'Users' }
  },
  {
    path: 'search/Organisations/:pageNumber', component: OrgSearchComponent, data: { name: 'Organisations' }
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
