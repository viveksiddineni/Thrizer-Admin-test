import { NumberMaskModule } from './number-mask.module';

describe('NumberMaskModule', () => {
  let numberMaskModule: NumberMaskModule;

  beforeEach(() => {
    numberMaskModule = new NumberMaskModule();
  });

  it('should create an instance', () => {
    expect(numberMaskModule).toBeTruthy();
  });
});
