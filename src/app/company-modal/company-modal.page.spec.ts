import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyModalPage } from './company-modal.page';

describe('CompanyModalPage', () => {
  let component: CompanyModalPage;
  let fixture: ComponentFixture<CompanyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
