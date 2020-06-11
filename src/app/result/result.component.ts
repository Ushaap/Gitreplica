import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GithubService} from '../github.service'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  data;
  repos;
  username;
  page: Array<any>;
  constructor(private ActivatedRoute: ActivatedRoute,private GithubService:GithubService) {
    this.username = this.ActivatedRoute.snapshot.params.username;
    this.GithubService.getUserDetails(this.username).subscribe((data)=> {
      this.data = data;
      console.log(this.data);
    })
    this.GithubService.getUserRepos(this.username).subscribe((repos)=> {
      this.repos = repos;
      console.log(this.repos);
    })
  }
  ngOnInit(): void {
  }
  onChangePage(page: Array<any>) {
    
    this.page = page;
}

}
