import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.scss'],
})
export class EmailDetailComponent implements OnInit {
  email = null;

  constructor(private route: ActivatedRoute, private http: EmailService) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      const id = p.id;
      this.email = this.http.getEmailById(id)[0];
    });
  }
}
