import { TestBed } from '@angular/core/testing';
import { InputAllowPreventKeysService } from './input-allow-prevent-keys-service.service';



describe('InputAllowPreventKeysServiceService', () => {
  let service: InputAllowPreventKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputAllowPreventKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
