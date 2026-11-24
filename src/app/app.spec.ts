import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

declare const describe: (name: string, definition: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (name: string, action: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy(): void };

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    })
      .compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
