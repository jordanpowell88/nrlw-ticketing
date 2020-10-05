import { FormBuilder } from '@angular/forms';
import { FiltersForm } from './filters-form';

describe('FiltersForm', () => {
  const fb = new FormBuilder();

  it('should create an instance', () => {
    expect(new FiltersForm(fb)).toBeTruthy();
  });
});
