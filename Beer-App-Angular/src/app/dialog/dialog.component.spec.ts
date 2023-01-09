import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailDialog } from './dialog.component';

describe('XyzComponent', () => {
  let component: BeerDetailDialog;
  let fixture: ComponentFixture<BeerDetailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerDetailDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerDetailDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
