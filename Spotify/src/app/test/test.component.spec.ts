import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestComponent} from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe(component.query);
  })

  it('should have class testowa', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').className).toBe("testowa");
  })
});
