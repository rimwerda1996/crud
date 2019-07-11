import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListeComponent } from './resource-liste.component';

describe('ResourceListeComponent', () => {
  let component: ResourceListeComponent;
  let fixture: ComponentFixture<ResourceListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
