import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { DragAndDropFileDirective } from './drag-and-drop-file.directive';

@NgModule({
  imports:      [ BrowserModule, CommonModule ],
  declarations: [ DragAndDropFileDirective ],
  exports: [DragAndDropFileDirective]
})
export class ShareDirectiveModule { }
