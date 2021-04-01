import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ShareDirectiveModule } from "./shared/directive/share-directive.module";

@NgModule({
  imports: [BrowserModule, ShareDirectiveModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
