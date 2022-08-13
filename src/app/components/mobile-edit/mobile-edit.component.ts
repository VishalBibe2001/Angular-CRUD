import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/Mobile';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mobile-edit',
  templateUrl: './mobile-edit.component.html',
  styleUrls: ['./mobile-edit.component.css']
})
export class MobileEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  mobileData: Mobile[];
  

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateMobile();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMobile(id);
    this.editForm = this.fb.group({
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
    return this.editForm.controls;
  }

  getMobile(id) {
    this.apiService.getMobile(id).subscribe((data) => {
      this.editForm.setValue({
        modelname: data['modelname'],
        modelyear: data['modelyear'],
        processor: data['processor'],
        storage: data['storage'],
        color: data['color'],
        price: data['price'],
        
      });
    });
  }

  updateMobile() {
    this.editForm = this.fb.group({
      modelname: ['', [Validators.required]],
      modelyear: ['', [Validators.required]],
      processor:['', [Validators.required]],
      storage:['', [Validators.required]],
      color:['', [Validators.required]],
      price:['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateMobile(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/mobile-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }

}
