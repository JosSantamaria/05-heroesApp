import { NgModule } from '@angular/core';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations:[],
  exports:[
    MatAutocompleteModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
