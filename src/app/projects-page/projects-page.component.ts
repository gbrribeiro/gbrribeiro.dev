import { Component } from '@angular/core';
import { ProjectViewModel } from '../../models/ProjectViewModel';
import { Projects } from '../../services/MockProject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

  projects = Projects

  constructor() {
    
  }
}
