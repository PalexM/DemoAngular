import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const appRoutes: Routes = [
  {path:'', component: UserComponent},
  {path:'about',component: AboutComponent},
  {path:'posts',component:PostsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PostsComponent,

  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
