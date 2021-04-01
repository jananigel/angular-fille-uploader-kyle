import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ShareDirectiveModule } from "./shared/directive/share-directive.module";
import { SharePipeModule } from "./shared/pipe/share-pipe.module";

@NgModule({
  imports: [BrowserModule, ShareDirectiveModule, SharePipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
