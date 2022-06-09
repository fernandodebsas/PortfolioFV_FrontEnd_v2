import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './componentes/education/education.component';
import { StickyheaderComponent } from './componentes/stickyheader/stickyheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componentes/footer/footer.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    StickyheaderComponent,
    FooterComponent,
    SkillsComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    MatToolbarModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
