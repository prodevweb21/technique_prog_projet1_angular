import { Component, OnInit } from '@angular/core';
import { reduceEachLeadingCommentRange } from 'typescript';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';



@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {

  forfaits : Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
