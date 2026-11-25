import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeCoursComponent } from './liste-cours';
declare const describe: (name: string, definition: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (name: string, action: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy(): void };

describe('ListeCoursComponent', () => {
  let component: ListeCoursComponent;
  let fixture: ComponentFixture<ListeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCoursComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
