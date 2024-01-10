import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { NoPageComponent } from './routing/no-page/no-page.component';
import { ChildhomeComponent } from './childRouting/childhome/childhome.component';
import { ChildaboutComponent } from './childRouting/childabout/childabout.component';
import { ChildAboutEverythingComponent } from './childRouting/child-about-everything/child-about-everything.component';
import { ChildAboutOnlyMeComponent } from './childRouting/child-about-only-me/child-about-only-me.component';

const routes: Routes = [

  {
    path:'about',
    component:AboutComponent 
  },
  {
    path:'contact/:id',
    component:ContactComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'childhome',
    component:ChildhomeComponent
  },
  {
    path:'childabout',
    component:ChildaboutComponent,
    children:[
      {path:'abouteverything', component:ChildAboutEverythingComponent},
      {path:'aboutonlyme', component:ChildAboutOnlyMeComponent}
    ]
  },
  {
    path:'**',
    component:NoPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
