import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitiesPageComponent } from './qualities-page.component';

describe('QualitiesPageComponent', () => {
  let component: QualitiesPageComponent;
  let fixture: ComponentFixture<QualitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualitiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
