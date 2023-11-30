import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditHttpComponent } from './book-edit-http.component';

describe('BookEditHttpComponent', () => {
  let component: BookEditHttpComponent;
  let fixture: ComponentFixture<BookEditHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookEditHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookEditHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
