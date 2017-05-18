import { Component, OnInit } from '@angular/core';

import { JournalServiceService } from '../../services/journal-service.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journals: Array<Object>;
  constructor(private journalserviceservice: JournalServiceService) { }

  ngOnInit() {
    this.journalserviceservice.getList()
    .subscribe((journals) => {
      this.journals = journals;
    });
  }

}
