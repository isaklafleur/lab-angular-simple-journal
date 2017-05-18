import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../../services/journal-service.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
display: Boolean = false;
title: String = '';
content: String = '';
  constructor(private journalserviceservice: JournalServiceService) {}

  ngOnInit() {
  }
  submitForm(myForm) {
    console.log(myForm.value);
    this.journalserviceservice.addNewJournal(myForm.value.title, myForm.value.content)
    this.display = true;
    this.title = '';
    this.content = '';
  }
}

