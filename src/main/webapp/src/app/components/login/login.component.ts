import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from "ngx-spinner";
import {AuthenticationService} from "../../services/auth.service";
import {Observable} from "rxjs/index";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUser: Observable<User>;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  invalidCredentials: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private spinnerService: NgxSpinnerService, private authService: AuthenticationService) {
  }

  // convenience getter for easy access to form fields
  get formFields() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loading = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.spinnerService.show();

    setTimeout(() => {
      this.authenticate();
    }, 3000);
  }

  authenticate() {
    this.authService.authenticate(this.formFields.username.value, this.formFields.password.value).subscribe(
      data => {
        if (data) {
          this.router.navigate(['/products']);
          localStorage.setItem('currentUser', data.id);
          this.spinnerService.hide();
        }
        else {
          this.loading = false;
          this.invalidCredentials = true;
          this.spinnerService.hide();
        }
      },
      error => {
        this.loading = false;
        this.router.navigate(['/']);
        this.spinnerService.hide();
      });
  }

}
