import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.scss'],
})
export class EmailBoxComponent implements OnInit {
  categories = [
    {
      name: 'inbox',
      value: 'inbox',
    },
    {
      name: 'finance',
      value: 'finance',
    },
    {
      name: 'travel',
      value: 'travel',
    },
    {
      name: 'personal',
      value: 'personal',
    },
    {
      name: 'drafts',
      value: 'drafts',
    },
    {
      name: 'sent',
      value: 'sent',
    },
  ];

  selectedCategory = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.selectedCategory = this.route.snapshot.params.id;
  }

  showCategory(cat): void {
    this.selectedCategory = cat.value;
    this.router.navigate(['messages/' + cat.value]);
  }
}
