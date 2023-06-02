import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DiscoverComponent } from '../main/discover/discover.component';
import { SearchComponent } from '../main/search/search.component';
import { ProfileComponent } from '../main/profile/profile.component';
import { ChatComponent } from '../main/chat/chat.component';

const routeConfig: Routes = [
  {
    path: '',
    component:DiscoverComponent,
  },
  {
    path: 'SearchComponent',
    component: SearchComponent,
  },
  {
	path: 'ProfileComponent',
	component: ProfileComponent,
  },
  {
    path: 'ChatComponent',
    component:ChatComponent,
  }
];

  export default routeConfig;