import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTitleService } from './services/app-title.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [],
  providers: [AppTitleService, AuthGuard]
})
export class CoreModule { }
