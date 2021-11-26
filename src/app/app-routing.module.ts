import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogModule } from '@ngneat/dialog';
import { HotToastModule } from '@ngneat/hot-toast';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DialogModule.forRoot(),
    HotToastModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
