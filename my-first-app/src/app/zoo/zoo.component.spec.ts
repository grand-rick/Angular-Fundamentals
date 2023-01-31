import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooComponent } from './zoo.component';

describe('ZooComponent', () => {
  let component: ZooComponent;
  let fixture: ComponentFixture<ZooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
