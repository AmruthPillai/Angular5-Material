import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  answer: string = '';
  answerDisplay: string = '';
  isCorrect: boolean;
  showSpinner: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showAnswer() {
    this.answerDisplay = '';
    this.showSpinner = true;

    setTimeout(() => {
      if (this.answer == 'Amruth' || this.answer == 'amruth') {
        this.isCorrect = true;
      }
      this.showSpinner = false;
    }, 2000)
  }

}
