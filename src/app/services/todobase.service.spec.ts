import { TestBed } from '@angular/core/testing';

import { TodobaseService } from './todobase.service';

describe('TodobaseService', () => {
  let service: TodobaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodobaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
