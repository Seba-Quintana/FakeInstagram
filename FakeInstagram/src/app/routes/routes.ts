import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DiscoverComponent } from '../main/discover/discover.component';
import { SearchComponent } from '../main/search/search.component';

const routeConfig: Routes = [
  {
    path: '',
    component: AppComponent ,
    title: 'App Page'
  },
  {
    path: '/discover',
    component:DiscoverComponent,
    title: 'Discover'
  },
  {
    path: '/search',
    component: SearchComponent,
    title: 'Search'
  }
];

  export default routeConfig;