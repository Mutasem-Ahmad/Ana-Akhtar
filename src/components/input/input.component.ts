import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, NgControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() autocomplete: string = 'off';
  @Input() id: string = 'default-input' + Math.random();
  @Input() name: string = 'default-input';
  @Input() placeholder: string = 'Enter ...';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() minlength: number = 1;
  innerValue: string = '';
  errorMessages: Map<string, () => string> = new Map();

  constructor(public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
    this.errorMessages.set(
      'required',
      () => `${this.placeholder} is required.`
    );
    this.errorMessages.set(
      'minlength',
      () => `The no. of characters should not be less than ${this.minlength}.`
    );
    this.errorMessages.set('email', () => `Enter a valid email.`);
  }

  get invalid(): boolean | null {
    return this.control ? this.control.invalid : false;
  }

  get showError(): boolean | null {
    if (!this.control) {
      return false;
    }

    const { dirty, touched } = this.control;

    return this.invalid ? dirty || touched : false;
  }

  get errors(): Array<string> {
    if (!this.control) {
      return [];
    }

    const { errors } = this.control as any;
    return Object.keys(errors).map((key) => key);
  }

  ngOnInit(): void {}

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  setValue(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: string): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
