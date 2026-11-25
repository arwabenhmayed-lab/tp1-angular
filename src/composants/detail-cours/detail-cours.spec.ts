
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { Cours } from '../liste-cours/liste-cours';

declare const describe: (name: string, definition: () => void) => void;
declare const beforeEach: (action: () => void | Promise<void>) => void;
declare const it: (name: string, action: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy(): void };

@Component({
  selector: 'app-detail-cours',
  standalone: true,
  templateUrl: './detail-cours.html',
  styleUrl: './detail-cours.css'
})
export class DetailCours {
  @Input() cours: Cours | null = null;
}

describe('DetailCours', () => {
  let component: DetailCours;
  let fixture: ComponentFixture<DetailCours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCours]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailCours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
