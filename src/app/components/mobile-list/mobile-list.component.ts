import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  Mobile:any=[];
  constructor(private apiService: ApiService) {
    this.readMobile();
   }

  ngOnInit() {}

  readMobile() {
    this.apiService.getMobiles().subscribe((data) => {
      this.Mobile = data;
    });
  }

  removeMobile(mobile, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteMobile(mobile._id).subscribe((data) => {
        this.Mobile.splice(index, 1);
      });
    }
  }

}
