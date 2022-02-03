import { Component, OnInit } from '@angular/core';
import { reduceEachLeadingCommentRange } from 'typescript';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';
declare function myMethod(): any;



@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {

  forfaits : Forfait[] = FORFAITS;
  result= 500-100;
  result1=1200-100;
  result2=1050-100

  constructor() { }

  ngOnInit(): void {
    myMethod();
  }
}
