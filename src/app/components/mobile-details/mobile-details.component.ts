import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
  Mobile:any=[];
  constructor(private apiService: ApiService) {
    this.readMobile();
   }
  ngOnInit(): void {}

  readMobile() {
    this.apiService.getMobiles().subscribe((data) => {
      this.Mobile = data;
    });
  }

  


}
