import { TestBed } from '@angular/core/testing';

import { NotedataService } from './notedata.service';

describe('NotedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotedataService = TestBed.get(NotedataService);
    expect(service).toBeTruthy();
  });
});
