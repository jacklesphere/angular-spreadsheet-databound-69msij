import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { defaultData, changedData } from './data';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addressValue = 'Work Orders!A6';
  aSpreadSheetData: Object[] = [];
  name = 'Angular ' + VERSION.major;
  // editedCell:any;

  constructor() {}

  @ViewChild('spreadSheetInstance')
  spreadSheetInstance: SpreadsheetComponent;

  ngOnInit(): void {
    this.aSpreadSheetData = defaultData();
  }

  dataSourceChanged(args) {
    console.log('dataSourceChanged triggered', args);
  }
  dataBound() {
    console.log('dataBound triggered');
  }

  cellSave(args) {
    console.log('cellSave', args);
  }

  cellEdit(args) {}

  changeCellData() {
    console.log(this.aSpreadSheetData);
    this.spreadSheetInstance.updateCell(
      { value: 'im Updated' },
      'Work Orders!A6'
    );
  }

  actionBegin(args) {
    console.log('action Begin', args);
  }

  actionComplete(args) {
    console.log('actionComplete', args);
  }
}
