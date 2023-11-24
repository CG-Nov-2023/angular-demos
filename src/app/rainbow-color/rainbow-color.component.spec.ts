import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowColorComponent } from './rainbow-color.component';

describe('RainbowColorComponent', () => {
  let component: RainbowColorComponent;
  let fixture: ComponentFixture<RainbowColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RainbowColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RainbowColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
