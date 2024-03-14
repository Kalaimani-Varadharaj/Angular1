import { TypeScriptDemoComponent } from './TypeScriptDemo/TypeScriptDemo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesDemoComponent } from './PipesDemo/PipesDemo.component';
import { CustomPipePipe } from './customPipe.pipe';
import { CustomPipesDemoComponent } from './CustomPipesDemo/CustomPipesDemo.component';
import { OneWayBindingDemoComponent } from './OneWayBindingDemo/OneWayBindingDemo.component';
import { TwoWayBindingDemoComponent } from './TwoWayBindingDemo/TwoWayBindingDemo.component';
import { EventBindingDemoComponent } from './EventBindingDemo/EventBindingDemo.component';
import { TemplateDrivenFormComponent } from './TemplateDrivenForm/TemplateDrivenForm.component';
import { ReactiveFormComponent } from './ReactiveForm/ReactiveForm.component';

const routes: Routes = [
  {path: 'TypeScriptDemo', component:TypeScriptDemoComponent},
  {path: 'PipesDemo', component : PipesDemoComponent},
  {path: 'CustomPipesDemo', component : CustomPipesDemoComponent},
  {path : 'OneWayBinding', component : OneWayBindingDemoComponent},
  {path : 'TwoWayBinding', component : TwoWayBindingDemoComponent},
  {path : 'EventBinding', component : EventBindingDemoComponent},
  {path : 'TemplateDrivenForm', component : TemplateDrivenFormComponent},
  {path : 'ReactiveForm', component : ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    //CustomPipePipe
  ]
})
export class AppRoutingModule { }
