import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseBatchComponent } from './create-course-batch.component';

describe('CreateCourseBatchComponent', () => {
  let component: CreateCourseBatchComponent;
  let fixture: ComponentFixture<CreateCourseBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});