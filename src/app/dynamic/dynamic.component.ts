import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class AppDynamic implements OnInit {
  ngOnInit() {
    console.log('dynamic...');
  }
}
