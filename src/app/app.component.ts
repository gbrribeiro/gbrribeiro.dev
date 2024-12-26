import { Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionPageComponent } from './introduction-page/introduction-page.component';
import { QualitiesPageComponent } from './qualities-page/qualities-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { EmailPageComponent } from './email-page/email-page.component';

@Component({
  selector: 'app-root',
  imports: [
    IntroductionPageComponent,
    QualitiesPageComponent,
    ProjectsPageComponent,
    EmailPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentPage = 0;
  maximumPages = 3;
  title = 'gbrribeiro.dev';

  isScrolling = false;
  @HostListener('wheel', ['$event'])
  wheelEventHandler(event: WheelEvent){
    event.preventDefault();
    if (this.isScrolling == false) {
      this.isScrolling = true;

      const delta = event.deltaY; // deltaY é a alternativa ao wheelDelta

      if (delta > 0) {
        this.goToNextPage();
      } else if (delta < 0) {
        this.goToPreviousPage();
      }

      setTimeout(() => {
        this.isScrolling = false;
      }, 1000); // Define o timeout para 1 segundo
    }

  }
  @HostListener('scroll', ['$event'])
  scrollHandler(event: Event): void {
    event.preventDefault();
  }

  ngOnInit(): void {
    this.currentPage = 0;
    this.moveToPage(this.currentPage);
  }

  public goToNextPage(){
    console.log("next page");
    console.log(this.currentPage);

    if(this.currentPage < this.maximumPages){
      this.moveToPage(this.currentPage + 1);
    }
  }

  public goToPreviousPage(){
    console.log("prev page");
    console.log(this.currentPage);
    if(this.currentPage > 0){
      this.moveToPage(this.currentPage - 1);
    }
  }

  moveToPage(nmbr : number){
    this.activatePageDot(this.currentPage, nmbr);
    this.currentPage = nmbr;
    document.getElementById(`page-${nmbr}`)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  activatePageDot(oldPage :number, activePage: number) {
    var elements = document.getElementsByClassName("scrollbar-dot");
    elements[oldPage].classList.remove("current-active");
    elements[oldPage].classList.add("current-unactive");
    elements[activePage].classList.remove("current-unactive");
    elements[activePage].classList.add("current-active");
  }
}
