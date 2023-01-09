import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http'

import { MatDialogModule } from '@angular/material/dialog'
import { BeerDetailDialog } from './dialog/dialog.component'

import { MatButtonModule } from '@angular/material/button'

import { MatCardModule } from '@angular/material/card'

import { MatFormFieldModule } from '@angular/material/form-field'

import { MatInputModule } from '@angular/material/input'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SearchFilterPipe } from './search-filter.pipe'

import { ReactiveFormsModule } from '@angular/forms'

import { MatSliderModule } from '@angular/material/slider'

import { MatSelectModule } from '@angular/material/select'

import { MatChipsModule } from '@angular/material/chips'

import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { MaterialCssVarsModule } from 'angular-material-css-vars'


@NgModule({
  declarations: [
    AppComponent,
    BeerDetailDialog,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule,
    MaterialCssVarsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
