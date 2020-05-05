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


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'congratulation', component: CongratulationComponent},
  { path: 'guideline', component: GuidelineComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'explanation', component: ExplanationComponent}
  
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
    RegisterComponent  
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
