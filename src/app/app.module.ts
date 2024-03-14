import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeScriptDemoComponent } from './TypeScriptDemo/TypeScriptDemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesDemoComponent } from './PipesDemo/PipesDemo.component';
import { CustomPipePipe } from './customPipe.pipe';
import { CustomPipesDemoComponent } from './CustomPipesDemo/CustomPipesDemo.component';
import { OneWayBindingDemoComponent } from './OneWayBindingDemo/OneWayBindingDemo.component';
import { TwoWayBindingDemoComponent } from './TwoWayBindingDemo/TwoWayBindingDemo.component';
import { EventBindingDemoComponent } from './EventBindingDemo/EventBindingDemo.component';
import { TemplateDrivenFormComponent } from './TemplateDrivenForm/TemplateDrivenForm.component';
import { ReactiveFormComponent } from './ReactiveForm/ReactiveForm.component';

@NgModule({
  declarations: [
    AppComponent,
      TypeScriptDemoComponent,
      PipesDemoComponent,
      CustomPipePipe,
      CustomPipesDemoComponent,
      OneWayBindingDemoComponent,
      TwoWayBindingDemoComponent,
      EventBindingDemoComponent,
      TemplateDrivenFormComponent,
      ReactiveFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
