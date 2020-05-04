import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { EndpageComponent } from './endpage/endpage.component'

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
    EndpageComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
