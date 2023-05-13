import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesComponent } from './entities.component';

const routes: Routes = [{
  path: '',
  component: EntitiesComponent,
  children: [{
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
