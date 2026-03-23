import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiensterCountiesPage } from './lienster-counties.page';

describe('LiensterCountiesPage', () => {
  let component: LiensterCountiesPage;
  let fixture: ComponentFixture<LiensterCountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensterCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
