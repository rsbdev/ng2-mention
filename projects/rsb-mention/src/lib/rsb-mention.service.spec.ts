import { TestBed, inject } from '@angular/core/testing';

import { RsbMentionService } from './rsb-mention.service';

describe('RsbMentionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RsbMentionService]
    });
  });

  it('should be created', inject([RsbMentionService], (service: RsbMentionService) => {
    expect(service).toBeTruthy();
  }));
});
