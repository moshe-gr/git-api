import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { observable } from 'rxjs';
import { GitInfo } from 'src/app/models/git-info';
import { GitApiService } from 'src/app/services/git-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges{
  @Input() userName;
  info: GitInfo = {name: null, avatar_url: null, location: null, bio: null, followers: null, following: null, created_at: null};
  constructor(private gitApi: GitApiService) {  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.gitApi.get(this.userName).subscribe(info => {this.info.name=info.name, this.info.avatar_url=info.avatar_url, this.info.bio=info.bio, this.info.location=info.location, this.info.following=info.following, this.info.followers=info.followers, this.info.created_at=info.created_at});
    if(changes !== this.userName){
      this.userName = changes;
    }
  }
}