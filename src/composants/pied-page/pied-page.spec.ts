import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiedPage } from './pied-page';
declare const describe: (name: string, definition: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (name: string, action: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy(): void };

describe('PiedPage', () => {
  let component: PiedPage;
  let fixture: ComponentFixture<PiedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiedPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
