import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tmeyer-scheduler.github.io';
  showToolsRow = false;
  showToolsCol = false;

  newRow = {columns: 0, height: 0, width: 100, bgcolor: 'green' };

  col = {imgUrl: ''};

  img = {url: '', width: 0, height: 0, alt: ''};

  header = {text: '', size: '1em', family: 'Arial', align: 'center', color: 'white'};

  p = {text: '', size: '1em', family: 'Arial', align: 'left', color: 'white'};

  italics = '';

  bold = '';

  elementType = '';

  currentElement: any;
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
          newCol.classList.add(`col-${this.newRow.columns}`, `newEle`);
          let $ = this;
          newCol.addEventListener('click', function() {
            $.currentElement = this;
            $.showToolsCol = true;
          })
        }
        body.appendChild(newRow);
    }
    this.showRowOptions();
  }

  attachEventListener(ele: HTMLElement) {
    let $ = this;
    ele.addEventListener('click', function() {
      $.showToolsCol = true;
    })
    $.showToolsCol = false;
  }
  deleteRow() {
    let ele = this.currentElement as HTMLElement;
    let row = ele.parentElement as Node;
    let body = document.getElementById('body');
    body?.removeChild(row);
  }

  deleteCol() {
    let ele = this.currentElement as Node;
    let row = ele.parentElement;
    row?.removeChild(ele);
  }

  closeToolsCol() {
    this.showToolsCol = false;
  }

  align(dir: string) {
    let ele = this.currentElement as Node;
    let arr = ele.parentElement?.children;
    if (arr) {
       let ar = Array.from(arr);
       ar.map(x => {
        x.setAttribute('style', `float: ${dir}`);
       });
    }
  }

  setImage() {
    let ele = this.currentElement as HTMLElement;
    let row = ele.parentElement as Node;
    let newEle = document.createElement('img');
    newEle.setAttribute('style', `float: left`);
    newEle.setAttribute('src', this.img.url);
    newEle.setAttribute('height', `${this.img.height}px`);
    newEle.setAttribute('width', `${this.img.width}px`);
    newEle.setAttribute('alt', `${this.img.alt}`);
    row.replaceChild(newEle, ele);

    this.attachEventListener(newEle);
    this.currentElement = newEle;
  }

  setHeader() {
    let ele = this.currentElement as HTMLElement;
    console.log(ele);
    let row = ele.parentElement as Node;
    let newEle = document.createElement(`${this.elementType}`);
    newEle.setAttribute('style', `font-size:${this.header.size};font-family:${this.header.family};
      color:${this.header.color};text-align:${this.header.align};padding:0.5em`);
    newEle.innerText = this.header.text;
    row.replaceChild(newEle, ele);

    this.attachEventListener(newEle);
    this.currentElement = newEle;
  }

  addText() {
    let ele = this.currentElement as HTMLElement;
    let row = ele.parentElement as Node;
    let newEle = document.createElement(`${this.elementType}`);
    newEle.innerHTML = this.p.text;
    newEle.classList.add(ele.classList[0]);
    row.replaceChild(newEle, ele);

    this.attachEventListener(newEle);
    this.currentElement = newEle;
  }

  checkType() {
    console.log(this.elementType);
  }

  addItalics() {
    this.p.text += `<i>${this.italics}</i>`;
    this.italics = '';
  }

  addBold() {
    this.p.text += `<b>${this.bold}</b>`;
    this.bold = '';
  }

  addLineBreak() {
    this.p.text += `<br>`
  }
}
