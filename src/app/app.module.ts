import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SuggestionService } from './suggestion.service';

@NgModule({
  imports: [BrowserModule, FormsModule, SpreadsheetAllModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [SuggestionService]
})
export class AppModule {}
