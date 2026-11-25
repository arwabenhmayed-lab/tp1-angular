import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnTete } from './en-tete';
declare const describe: (name: string, definition: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (name: string, action: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy(): void };

describe('EnTete', () => {
  let component: EnTete;
  let fixture: ComponentFixture<EnTete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnTete]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EnTete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
