import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(private api: ApiService) {}
  data: any;
  ngOnInit(): void {
    this.api.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
