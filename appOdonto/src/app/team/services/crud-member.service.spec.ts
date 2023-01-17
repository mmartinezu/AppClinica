import { TestBed } from '@angular/core/testing';

import { CrudMemberService } from './crud-member.service';

describe('CrudMemberService', () => {
  let service: CrudMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
