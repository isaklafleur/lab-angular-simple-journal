import { Routes } from '@angular/router';

import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';


export const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: ':id', component: SingleEntryComponent },
    { path: '**', redirectTo: '' }
];
