import { SelectFilter } from './../../interfaces/select-filter';
import { ConfigService, ResourceService } from '@sunbird/shared';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '@sunbird/core';
@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.css']
})

export class HomeFilterComponent implements OnInit {
  @Input() key: any;
  config: ConfigService;
  resourceService: ResourceService;
  searchService: SearchService;
  searchBoards: Array<string>;
  searchLanguages: Array<string>;
  searchSubjects: Array<string>;
  pageNumber: number;
  selectedBoard: any;
  search: SelectFilter = {} ;

  constructor(config: ConfigService, searchService: SearchService, private activatedRoute: ActivatedRoute,
    resourceService: ResourceService, private router: Router) {
    this.config = config;
    this.resourceService = resourceService;
    this.searchService = searchService;
  }
  init() {
    this.search.selectedBoards =  this.search.selectedBoards || [];
    this.search.selectedMediums = this.search.selectedMediums || [];
    this.search.selectedSubjects = this.search.selectedSubjects || [];
  }

  selectFilter(filterType, value) {
     this.init();
      const itemIndex = this.search[filterType].indexOf(value);
     if (itemIndex === -1) {
      this.search[filterType].push(value);
     } else {
      this.search[filterType].splice(itemIndex, 1);
    }
  }

  removeFilterSelection(filterType, value) {
    if (filterType === 'selectedConcepts') {

    } else {
      const itemIndex = this.search[filterType].indexOf(value);
        if (itemIndex !== -1) {
          this.search[filterType].splice(itemIndex, 1);
        }
    }
  }
  applyFilters() {
   const filter = {
    board: this.search.selectedBoards,
    language: this.search.selectedMediums, subject: this.search.selectedSubjects
    };
    console.log(this.key);
    const filter1 = JSON.stringify(filter);
    console.log(filter1);
      this.router.navigate(['/search/All', 1],
     { queryParams: {  key: this.key  , filter: filter1 } });
  }

  resetFilters() {
    this.search.selectedBoards = [];
    this.search.selectedMediums = [];
    this.search.selectedSubjects = [];
    this.router.navigate(['/search/All', 1]);
  }
  ngOnInit() {
    // console.log(this.content);
    this.searchBoards = this.config.dropDownConfig.FILTER.RESOURCES.boards;
    this.searchLanguages = this.config.dropDownConfig.FILTER.RESOURCES.languages;
    this.searchSubjects = this.config.dropDownConfig.FILTER.RESOURCES.subjects;
  }

}
