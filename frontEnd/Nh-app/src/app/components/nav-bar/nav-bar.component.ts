import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedTab: string | null;

  Select(tabToSelect: any) {
    this.selectedTab = tabToSelect;
    console.log("selected tab is now " + this.selectedTab)

    // Go and do other things

  }

}