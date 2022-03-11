import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {InlineSVGModule} from 'ng-inline-svg';
import {UserInnerComponent} from './dropdown-inner/user-inner/user-inner.component';
import {LayoutScrollTopComponent} from './scroll-top/scroll-top.component';
import {TranslationModule} from '../../../../modules/i18n';
import {SearchResultInnerComponent} from "./dropdown-inner/search-result-inner/search-result-inner.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  
    SearchResultInnerComponent,
    UserInnerComponent,
    LayoutScrollTopComponent,
  ],
  imports: [CommonModule, FormsModule, InlineSVGModule, RouterModule, TranslationModule, NgbTooltipModule],
  exports: [
    SearchResultInnerComponent,
    UserInnerComponent,
    LayoutScrollTopComponent,
  ],
})
export class ExtrasModule {
}
