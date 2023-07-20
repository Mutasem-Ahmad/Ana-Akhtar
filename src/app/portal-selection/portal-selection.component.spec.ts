import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSelectionComponent } from './portal-selection.component';

describe('PortalSelectionComponent', () => {
  let component: PortalSelectionComponent;
  let fixture: ComponentFixture<PortalSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalSelectionComponent]
    });
    fixture = TestBed.createComponent(PortalSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
