import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBComponent } from './route-b.component';

describe('RouteBComponent', () => {
  let component: RouteBComponent;
  let fixture: ComponentFixture<RouteBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
