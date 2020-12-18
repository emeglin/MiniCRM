import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleModalPage } from './sale-modal.page';

describe('SaleModalPage', () => {
  let component: SaleModalPage;
  let fixture: ComponentFixture<SaleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
