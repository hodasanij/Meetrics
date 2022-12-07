import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MeetingsComponent } from './meetings.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';

@NgModule({
  declarations: [CreateMeetingComponent, MeetingsComponent, ViewMeetingComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class MeetingsModule {}
