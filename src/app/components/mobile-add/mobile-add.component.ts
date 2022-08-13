import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mobile-add',
  templateUrl: './mobile-add.component.html',
  styleUrls: ['./mobile-add.component.css']
})
export class MobileAddComponent implements OnInit {
  submitted = false;
  mobileForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.mobileForm = this.fb.group({
      modelname: ['', [Validators.required]],
      modelyear: ['', [Validators.required]],
      processor:['', [Validators.required]],
      storage:['', [Validators.required]],
      color:['', [Validators.required]],
      price:['', [Validators.required]],
    });
  }

  
  // Getter to access form control
  get myForm() {
    return this.mobileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.mobileForm.valid) {
      return false;
    } else {
      return this.apiService.createMobile(this.mobileForm.value).subscribe({
        complete: () => {
          console.log('Mobile model successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/mobile-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}



