import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITicketFilter, IUser } from '../../interfaces';
import { FiltersForm } from './filters-form';

@Component({
  selector: 'app-ticket-filters',
  templateUrl: './ticket-filters.component.html',
  styleUrls: ['./ticket-filters.component.scss']
})
export class TicketFiltersComponent implements OnInit {
  @Input() users: IUser[] = [];
  @Output() filter: EventEmitter<ITicketFilter> = new EventEmitter();

  form: FiltersForm;

  constructor(readonly fb: FormBuilder) {
    this.form = new FiltersForm(fb);
  }

  ngOnInit(): void {}

  updateFilters(): void {
    this.filter.emit({
      ...this.form.value
    });
  }
}
