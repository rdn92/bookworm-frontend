import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AuthorService', () => {
  let httpTestingController: HttpTestingController;
  let service: AuthorService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
