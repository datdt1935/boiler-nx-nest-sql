import { Test } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let controller: LocationController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LocationService],
      controllers: [LocationController],
    }).compile();

    controller = module.get(LocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
