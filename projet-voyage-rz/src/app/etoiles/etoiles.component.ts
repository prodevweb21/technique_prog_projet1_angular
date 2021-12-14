import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {
  
  @Input() starRating = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
