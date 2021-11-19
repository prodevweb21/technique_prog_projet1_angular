import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {
  starRating = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
