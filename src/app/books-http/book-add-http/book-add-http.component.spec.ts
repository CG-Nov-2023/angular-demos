import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddHttpComponent } from './book-add-http.component';

describe('BookAddHttpComponent', () => {
  let component: BookAddHttpComponent;
  let fixture: ComponentFixture<BookAddHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookAddHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookAddHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
