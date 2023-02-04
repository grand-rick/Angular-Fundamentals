import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoriesComponent } from './directories.component';

describe('DirectoriesComponent', () => {
  let component: DirectoriesComponent;
  let fixture: ComponentFixture<DirectoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
