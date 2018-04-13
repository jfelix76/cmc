import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cookbookTypes: any;

  constructor(public http: Http) {}

  ngOnInit() {
    this.http.get('assets/home-page.json')
      .subscribe((data) => {
        this.cookbookTypes = data.json()['cookbookTypes'];
        console.log('cookbooks', this.cookbookTypes);
      });
  }
}
