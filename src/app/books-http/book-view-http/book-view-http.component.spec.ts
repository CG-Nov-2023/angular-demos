import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewHttpComponent } from './book-view-http.component';

describe('BookViewHttpComponent', () => {
  let component: BookViewHttpComponent;
  let fixture: ComponentFixture<BookViewHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookViewHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookViewHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
