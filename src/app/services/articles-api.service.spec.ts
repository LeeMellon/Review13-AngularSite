import { TestBed, inject } from '@angular/core/testing';

import { ArticlesApiService } from './articles-api.service';

describe('ArticlesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesApiService]
    });
  });

  it('should be created', inject([ArticlesApiService], (service: ArticlesApiService) => {
    expect(service).toBeTruthy();
  }));
});
