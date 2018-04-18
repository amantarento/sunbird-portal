import { ContentService } from './../content/content.service';
import { TestBed, inject } from '@angular/core/testing';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from './../search/search.service';
import { UserService } from './../user/user.service';
import { LearnerService } from './../learner/learner.service';
import { Observable } from 'rxjs/Observable';
import { SearchParam } from '@sunbird/core';
import { ServerResponse } from '@sunbird/shared';
import { ConfigService, ResourceService, ToasterService} from '@sunbird/shared';
import { ConceptPickerService } from './concept-picker.service';
import {mockRes} from './concept-picker.service.spec.data';
describe('ConceptPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Ng2IziToastModule],
      providers: [ConceptPickerService, SearchService, UserService, ConfigService, LearnerService, ResourceService,
        ToasterService, ContentService]
    });
  });
  it('should be created', inject([ConceptPickerService], (service: ConceptPickerService) => {
    expect(service).toBeTruthy();
  }));
  // it('should call getConcept', inject([ConceptPickerService, SearchService], (service: ConceptPickerService,
  //   searchService: SearchService, contentService: ContentService) => {
  //     const searchParams = {
  //       filters: {
  //         objectType: ['Concept']
  //       },
  //       offset: 0,
  //       limit: 200
  //     };
  //     // spyOn(contentService, 'post').and.callFake(() => Observable.of(mockRes.success));
  //     // searchService.compositeSearch(searchParams);
  //     // expect(service).toBeTruthy();
  //     // expect(contentService.post).toHaveBeenCalled();
  //     // spyOn(searchService, 'compositeSearch').and.callFake(() => Observable.of(mockRes.result));
  //     // service.getConcept(0, 200);
  //     // expect()
  // }));
});
