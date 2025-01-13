import { TestBed } from '@angular/core/testing';

import { WishRepoService } from './wish-repo.service';

describe('WishRepoService', () => {
  let service: WishRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
