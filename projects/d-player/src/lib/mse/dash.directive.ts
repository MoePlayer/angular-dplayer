import { Directive, Host, Optional, Self } from '@angular/core';
import { DPlayerComponent } from '../d-player.component';
import { MediaPlayer } from 'dashjs';

@Directive({
  selector: '[dpDash]'
})
export class DashDirective {
  constructor(
    @Host() @Self() @Optional() private _dp: DPlayerComponent
  ) {
    this._dp.MSE.push({
      type: 'dash',
      instance: MediaPlayer().create()
    });
  }
}