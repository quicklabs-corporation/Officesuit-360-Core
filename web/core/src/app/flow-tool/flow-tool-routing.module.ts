import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowToolComponent } from './flow-tool.component';

const routes: Routes = [{
  path: '',
  component: FlowToolComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowToolRoutingModule { }
