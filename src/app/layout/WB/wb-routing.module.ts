import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WBComponent } from './wb.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TechnologyComponent } from './technology/technology.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',component: WBComponent,
    children: [
        { path: '', component:  HomeComponent },
        { path: 'about', component: AboutUsComponent},
        { path: 'contact', component: ContactUsComponent},
        { path: 'technology', component: TechnologyComponent},
        { path: 'client', component: ClientComponent},
       
    ]
}
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WBRoutingModule { }
