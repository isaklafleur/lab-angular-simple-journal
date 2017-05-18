import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JournalServiceService } from '../../services/journal-service.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  journal: any

  constructor(private route: ActivatedRoute, private router: Router, private journalserviceservice: JournalServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }
  getJournalDetails(id) {
    this.journalserviceservice.get(id)
    .subscribe((journal) => {
      this.journal = journal;
      console.log(JSON.stringify(journal, null, 2));
    });
  }

}
