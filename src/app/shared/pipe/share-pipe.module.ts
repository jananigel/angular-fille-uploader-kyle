import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { FileSizeConverterPipe } from "./file-size-converter.pipe";

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [FileSizeConverterPipe],
  exports: [FileSizeConverterPipe]
})
export class SharePipeModule {}
