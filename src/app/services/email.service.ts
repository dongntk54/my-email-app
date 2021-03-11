import { Injectable } from '@angular/core';
import mockData from '../mock-data/messages';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  getEmails(cat) {
    return mockData.filter((e) => e.folder === cat);
  }
}
