import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComComponent } from './user-list-com/user-list-com.component';
import { UserSecComComponent } from './user-sec-com/user-sec-com.component';
import { UserThirdComComponent } from './user-third-com/user-third-com.component';
import { UserBothComponent } from './user-both/user-both.component';

import { UserAuthMModule } from './user-auth-m/user-auth-m.module'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ReUsableComponent } from './re-usable/re-usable.component';
import { UsdInrPipe } from './pipe/usd-inr.pipe';

import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './directive/red-el.directive';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { ChildhomeComponent } from './childRouting/childhome/childhome.component';
import { ChildaboutComponent } from './childRouting/childabout/childabout.component';
import { ChildAboutEverythingComponent } from './childRouting/child-about-everything/child-about-everything.component';
import { ChildAboutOnlyMeComponent } from './childRouting/child-about-only-me/child-about-only-me.component';
import { DatabyserviceComponent } from './databyservice/databyservice.component';

//API 
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserListComComponent,
    UserSecComComponent,
    UserThirdComComponent,
    UserBothComponent,
    HeaderComponent,
    ChildComponent,
    ChildTwoComponent,
    ReUsableComponent,
    UsdInrPipe,
    RedElDirective,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ChildhomeComponent,
    ChildaboutComponent,
    ChildAboutEverythingComponent,
    ChildAboutOnlyMeComponent,
    DatabyserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthMModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
