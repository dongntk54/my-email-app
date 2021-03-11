import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss'],
})
export class EmailPreviewComponent implements OnInit {
  emails = [];
  selectedEmail = '';

  constructor(
    private route: ActivatedRoute,
    private http: EmailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let cat = p.id;
      this.selectedEmail = '';
      this.emails = this.http.getEmails(cat);
    });
  }

  showDetail(e): void {
    this.selectedEmail = e._id;
    this.router.navigateByUrl(
      this.router.url.split('(')[0] + `(detail:${e._id})`
    );
  }
}
