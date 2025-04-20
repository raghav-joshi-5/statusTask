import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDashComponent } from './pass-dash/pass-dash.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { MaterialModule } from '../../material/material.module';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  declarations: [PassDashComponent, PassCardComponent, PassCountComponent, RemoveComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PassDashComponent],
})
export class PassengerModule {}
