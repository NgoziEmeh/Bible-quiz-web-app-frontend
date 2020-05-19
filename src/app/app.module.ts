import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { HomeComponent } from './home/home.component';
import { GuidelineComponent } from './guideline/guideline.component';
import { ProgressComponent } from './progress/progress.component';
import { QuestionComponent } from './question/question.component';
import { ExplanationComponent } from './explanation/explanation.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { EndpageComponent } from './endpage/endpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeaderboardadComponent } from './leaderboardad/leaderboardad.component';
import { SquareadComponent } from './squaread/squaread.component';
import { RectangleadComponent } from './rectanglead/rectanglead.component';
import { TopplayersComponent } from './topplayers/topplayers.component';
import { MobileadComponent } from './mobilead/mobilead.component';
import { MediumleaderboardComponent } from './mediumleaderboard/mediumleaderboard.component';
import { SkyscraperadComponent } from './skyscraperad/skyscraperad.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'congratulation', component: CongratulationComponent},
  { path: 'guideline', component: GuidelineComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'explanation', component: ExplanationComponent},
  { path: 'quizend', component: EndpageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScoreboardComponent,
    HomeComponent,
    GuidelineComponent,
    ProgressComponent,
    QuestionComponent,
    ExplanationComponent,
    CongratulationComponent,
    EndpageComponent,
    LoginComponent,
    RegisterComponent,
    LeaderboardadComponent,
    SquareadComponent,
    RectangleadComponent,
    TopplayersComponent,
    MobileadComponent,
    MediumleaderboardComponent,
    SkyscraperadComponent  
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
