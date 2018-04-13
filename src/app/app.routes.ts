import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainerComponent } from './components/services/trainer/trainer.component';
import { ConsultantComponent } from './components/services/consultant/consultant.component';
import { EventsComponent } from './components/services/events/events.component';
import { EntrepreneurComponent } from './components/services/entrepreneur/entrepreneur.component';
import { CommunityComponent } from './components/community/community.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'servicios/trainer', component: TrainerComponent },
  { path: 'servicios/consultant', component: ConsultantComponent },
  { path: 'servicios/events', component: EventsComponent },
  { path: 'servicios/entrepreneur', component: EntrepreneurComponent },
  { path: 'comunidad', component: CommunityComponent },
  { path: 'acerca', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'privacidad', component: PrivacyComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'NotFoundComponent' }
];

export const app_routing = RouterModule.forRoot(app_routes);