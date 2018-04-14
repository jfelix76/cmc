import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cookbookTypes: any;

  constructor(public http: Http, private router: Router) {}

  ngOnInit() {
    this.http.get('assets/home-page.json')
      .subscribe((data) => {
        this.cookbookTypes = data.json()['cookbookTypes'];
        console.log('cookbooks', this.cookbookTypes);
      });
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

}
