import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// PlugIns
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from "ngx-wow";
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Routes
import { app_routing } from './app.routes';

// Services
import { InfoService } from './services/info.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TrainerComponent } from './components/services/trainer/trainer.component';
import { ConsultantComponent } from './components/services/consultant/consultant.component';
import { EntrepreneurComponent } from './components/services/entrepreneur/entrepreneur.component';
import { EventsComponent } from './components/services/events/events.component';
import { CommunityComponent } from './components/community/community.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EstoNoEsCoachingComponent } from './components/events/esto-no-es-coaching/esto-no-es-coaching.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TrainerComponent,
    ConsultantComponent,
    EntrepreneurComponent,
    EventsComponent,
    CommunityComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    SitemapComponent,
    NotFoundComponent,
    EstoNoEsCoachingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2PageScrollModule,
    app_routing,
    NgwWowModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
      InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
