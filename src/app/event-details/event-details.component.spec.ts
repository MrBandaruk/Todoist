import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF  } from '@angular/common';

import { EventDetailsComponent } from './event-details.component';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('detail/1')
  };
  let mockActivatedRouter = {
    params: jasmine.createSpy('detail/1')
  };



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterModule,
        SimpleNotificationsModule
      ],
      declarations: [ EventDetailsComponent ],
      providers: [
        AuthService,
        EventService,
        Location,
        //LocationStrategy,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        // { provide: APP_BASE_HREF, useValue: '/detail/1'},
        NotificationsService,
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
