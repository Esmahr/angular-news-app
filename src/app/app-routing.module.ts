import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/aboutPage';
import { Categories } from './categories/categories.component';
import { Business } from './business/business.component';
import { Entertainment } from './entertainment/entertainment.component';
import { General } from './general/general.component';
import { Health } from './health/health.component';
import { Science } from './science/science.component';
import { Sports } from './sports/sports.component';
import { Technology } from './technology/technology.component';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path: '',component:SliderComponent}, //home
  {path: 'about', component:About},
  {path: 'categories', component:Categories},
  {path: 'business', component:Business},
  {path: 'entertainment', component:Entertainment},
  {path: 'general', component:General},
  {path: 'health', component:Health},
  {path: 'science', component:Science},
  {path: 'sports', component:Sports},
  {path: 'technology', component:Technology}
	
];

@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

