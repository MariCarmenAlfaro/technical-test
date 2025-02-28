import { TestBed } from '@angular/core/testing';

import { TopMenuBarService } from './top-menu-bar.service';

describe('TopMenuBarService', () => {
  let service: TopMenuBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMenuBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
