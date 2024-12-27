import { Component } from '@angular/core';
import { ProjectViewModel } from '../../models/ProjectViewModel';
import { Projects } from '../../services/MockProject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  projects = Projects;

  constructor() {
    //Cards logic
    var cards = document.getElementsByClassName('card-obj');
    if (cards.length > 4) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('mx-auto');
        cards[i].classList.add('mx-2');
      }
    }
  }
}
