import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalServiceService {
  BASE_URL: String = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
    .map((res) => res.json());
  }
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
    .map((res) => res.json());
  }
  addNewJournal(title: any, content: any) {
    const newJournal = {
      title: title,
      content: content,
    }
    return this.http.post(`${this.BASE_URL}/api/journal-entries/`, newJournal)
    .subscribe(data => {
      console.log(data.json())
    });
  }
}
