import { Component, Input, OnInit } from '@angular/core';
import { GitInfo } from 'src/app/models/git-info';
import { GitApiService } from 'src/app/services/git-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() userName: string;
  info: GitInfo;
  constructor(private gitApi: GitApiService) { }

  ngOnInit(): void {
    this.gitApi.get(this.userName).subscribe(info => this.info = info);
  }

}
