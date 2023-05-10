import { TestBed } from '@angular/core/testing';

import { EliteService } from './elite.service';

describe('EliteService', () => {
  let service: EliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
