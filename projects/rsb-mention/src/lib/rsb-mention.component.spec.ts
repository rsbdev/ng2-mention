import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsbMentionComponent } from './rsb-mention.component';

describe('RsbMentionComponent', () => {
  let component: RsbMentionComponent;
  let fixture: ComponentFixture<RsbMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsbMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsbMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
