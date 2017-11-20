import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojKomponentComponent } from './moj-komponent.component';

describe('MojKomponentComponent', () => {
  let component: MojKomponentComponent;
  let fixture: ComponentFixture<MojKomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojKomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojKomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
