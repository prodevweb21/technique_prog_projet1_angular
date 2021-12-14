import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {

  forfaits : Forfait[] = FORFAITS;


  



  constructor() { }

  ngOnInit(): void {
  }

}
