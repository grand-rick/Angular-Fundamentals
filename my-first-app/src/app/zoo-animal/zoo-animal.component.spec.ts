import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooAnimalComponent } from './zoo-animal.component';

describe('ZooAnimalComponent', () => {
  let component: ZooAnimalComponent;
  let fixture: ComponentFixture<ZooAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
