import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  selectedPortal: string = 'student';
  password: string | null = null;
  username: string | null = null;
  loginForm = this._formBuilder.group({
    username: [
      { value: '', disabled: false },
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
    ],
    password: ['', Validators.required],
  });

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    if (this._activatedRoute.snapshot.params['id']) {
      this.selectedPortal = this._activatedRoute.snapshot.params['id'];
    }
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('class', `theme-${this.selectedPortal}`);
  }

  ngOnInit(): void {}

  backToPortalsSelection(event: MouseEvent) {
    event.preventDefault();
    this._router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this._router.navigate([`portal/${this.selectedPortal}`]);
  }
}
