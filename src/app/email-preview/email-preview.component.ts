import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent implements OnInit {

  emails = [];

  constructor(private route: ActivatedRoute, private http: EmailService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      console.log(p);
      let cat = p.id;
      this.emails = this.http.getEmails(cat);
      console.log(this.emails);
      
    })
  }

}
