import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const buttonClasses = {
  Outline: 'outline-button',
  Filled: 'filled-button',
  Elevated: 'elevated-button',
  Icons: 'icons-button',
};

const buttonTypes = {
  button: 'button',
  menu: 'menu',
  submit: 'submit',
  reset: 'reset',
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Submit';
  @Input() id: string = 'submit-button';
  @Input() name: string = 'submit-button';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
  private _buttonClass: string = '';
  private _buttonType: string = '';

  @Input()
  set buttonClass(type: string) {
    if (Object.values(buttonClasses).includes(type)) {
      this._buttonClass = type;
    } else {
      console.error(`Invalid button type: ${type}`);
      this._buttonClass = buttonClasses.Filled;
    }
  }
  get buttonClass(): string {
    return this._buttonClass || buttonClasses.Filled;
  }

  @Input()
  set buttonType(type: string) {
    if (Object.values(buttonTypes).includes(type)) {
      this._buttonType = type;
    } else {
      console.error(`Invalid button type: ${type}`);
      this._buttonType = buttonTypes.button;
    }
  }
  get buttonType(): string {
    return this._buttonType || buttonTypes.button;
  }

  ngOnInit(): void {}
}
