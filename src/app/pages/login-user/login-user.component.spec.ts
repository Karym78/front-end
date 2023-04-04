import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { LoginUserComponent } from './login-user.component';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

describe('LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
