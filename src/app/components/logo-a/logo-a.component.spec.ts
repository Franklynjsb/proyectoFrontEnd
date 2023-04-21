import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAComponent } from './logo-a.component';

describe('LogoAComponent', () => {
  let component: LogoAComponent;
  let fixture: ComponentFixture<LogoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
