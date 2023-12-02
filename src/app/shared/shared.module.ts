import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatChipsModule,
  ],
})
export class SharedModule {}
