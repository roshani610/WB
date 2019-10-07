import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WBRoutingModule } from './wb-routing.module';
import { WBComponent } from './wb.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClientComponent } from './client/client.component';
import { TechnologyComponent } from './technology/technology.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from 'src/app/shared';

@NgModule({
  declarations: [WBComponent, AboutUsComponent, HomeComponent, ContactUsComponent, ClientComponent, TechnologyComponent],
  imports: [
    CommonModule,
    WBRoutingModule,
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    StatModule
  ]
})
export class WBModule { }

