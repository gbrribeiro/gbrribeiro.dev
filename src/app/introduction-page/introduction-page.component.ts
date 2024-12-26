import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-introduction-page',
  imports: [],
  templateUrl: './introduction-page.component.html',
  styleUrl: './introduction-page.component.scss',
})
export class IntroductionPageComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    //Typed Logic
    var typed = new Typed('.auto-type', {
      strings: ['Full-Stack', 'Back-End', 'Front-End', 'Mobile'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 5000,
      loop: true,
    });

    var typedProjects = new Typed('.auto-type-projects', {
      strings: ['Projects.'],
      typeSpeed: 300,
      loop: false,
    });

  }

  public closeMenu() {
    var menu = document.getElementById('menu-list');
    menu!.classList.remove('open-this.menu');
    menu!.classList.add('close-menu');
  }

  public openMenu() {
    var menu = document.getElementById('menu-list');
    menu!.classList.remove('close-menu');
    menu!.classList.add('open-menu');
  }
}
