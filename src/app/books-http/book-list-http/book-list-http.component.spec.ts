import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListHttpComponent } from './book-list-http.component';

describe('BookListHttpComponent', () => {
  let component: BookListHttpComponent;
  let fixture: ComponentFixture<BookListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookListHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
