import { TestBed } from '@angular/core/testing';

import { MineralService } from './mineral.service';

describe('MineralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MineralService = TestBed.get(MineralService);
    expect(service).toBeTruthy();
  });
});
