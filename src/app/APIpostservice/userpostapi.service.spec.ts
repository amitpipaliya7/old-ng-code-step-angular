import { TestBed } from '@angular/core/testing';

import { UserpostapiService } from './userpostapi.service';

describe('UserpostapiService', () => {
  let service: UserpostapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpostapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
