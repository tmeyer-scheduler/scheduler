import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tmeyer-scheduler.github.io';
  showToolsRow = false;
  newRow = {columns: 0, height: 0, width: 100, bgcolor: 'green' };

  showRowOptions() {
    this.showToolsRow = !this.showToolsRow;
  }

  addRow() {
    let body = document.getElementById('body');
    if (body != null) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let i = 0; i < this.newRow.columns; i++) {
          
          let newCol = document.createElement('div');
          newRow.appendChild(newCol);
          newCol.textContent = "Click to Edit";
          newCol.addEventListener("click", this.editThis);
          newCol.classList.add(`col-${this.newRow.columns}`, `newEle`);
        }
        body.appendChild(newRow);
    }
    this.showRowOptions();
  }

  editThis(this: any) {
    console.log(this);
  }

}
