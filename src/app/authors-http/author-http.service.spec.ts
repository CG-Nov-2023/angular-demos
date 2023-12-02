import { TestBed } from '@angular/core/testing';

import { AuthorHttpService } from './author-http.service';

describe('AuthorHttpService', () => {
  let service: AuthorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
