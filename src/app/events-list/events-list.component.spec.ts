import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NotificationsService, SimpleNotificationsModule} from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { EventComponent } from '../event/event.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { EventsListComponent } from './events-list.component';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        SimpleNotificationsModule,
        RouterModule
      ],
      declarations: [ EventsListComponent, EventComponent ],
      providers: [ AuthService,
        EventService,
        NotificationsService,
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
