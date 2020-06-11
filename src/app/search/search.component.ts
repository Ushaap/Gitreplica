import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchForm;
  constructor() { 
    this.searchForm=new FormGroup({
      userName : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

}
