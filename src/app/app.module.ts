import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// PlugIns
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from "ngx-wow";

// Routes
import { app_routing } from './app.routes';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    NgwWowModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
