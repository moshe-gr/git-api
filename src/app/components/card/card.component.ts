import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GitInfo } from 'src/app/models/git-info';
import { GitApiService } from 'src/app/services/git-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges{
  @Input() userName;
  info: GitInfo;
  constructor(private gitApi: GitApiService) {  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.gitApi.get(this.userName).subscribe(info => this.info = info);
    if(changes !== this.userName){
      this.userName = changes;
    }
  }
  

}
