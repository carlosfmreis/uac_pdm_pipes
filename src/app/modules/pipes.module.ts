import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';

@NgModule({
  declarations: [DateFormatPipe],
  imports: [CommonModule],
  exports: [DateFormatPipe],
})
export class PipesModule {}
