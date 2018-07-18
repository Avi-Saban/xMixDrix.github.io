import {Component} from '@angular/core';
import {range} from 'rxjs';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isXTurn: boolean;
  boxContents: BoxContent[];

  constructor() {
    this.initBoard();
  }

  private initBoard() {
    this.isXTurn = true;
    this.boxContents = [];
    for (let i = 0; i <= 8; i++) {
      const boxContent = {
        id: i,
        name: '',
      };
      this.boxContents.push(boxContent);
    }
    console.log(this.boxContents);
  }

  newGame() {
    this.initBoard();
  }

  setBox(boxContent) {
    if (boxContent.name != '') {
      return;
    }
    else {
      if (this.isXTurn) {
        boxContent.name = Player.X;
        this.isXTurn = false;
      }
      else {
        boxContent.name = Player.O;
        this.isXTurn = true;
      }
    }
    // if (isTheGameEnd()){
    //
    // }
  }
}

interface BoxContent {
  id: number;
  name: string;
}

enum Player {
  EMPTY = "",
  X = "X",
  O = "0",
}
