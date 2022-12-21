import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleColor(value: number){
    const body = document.querySelector('body')

    if (value == 0){
      body.classList.add('dark')
    } else{
      body.classList.remove('dark')
    }
  }

}
