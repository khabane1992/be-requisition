import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BerequisitionSharedModule } from 'app/shared/shared.module';
import { BerequisitionCoreModule } from 'app/core/core.module';
import { BerequisitionAppRoutingModule } from './app-routing.module';
import { BerequisitionHomeModule } from './home/home.module';
import { BerequisitionEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BerequisitionSharedModule,
    BerequisitionCoreModule,
    BerequisitionHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BerequisitionEntityModule,
    BerequisitionAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class BerequisitionAppModule {}
