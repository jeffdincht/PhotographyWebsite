import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './master/footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './master/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { BabyComponent } from './pages/baby/baby.component';
import { NewbornComponent } from './pages/newborn/newborn.component';
import { PregnantComponent } from './pages/pregnant/pregnant.component';
import { FamilyComponent } from './pages/family/family.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GridComponent } from './components/grid/grid.component';
import { GridCategoriesComponent } from './components/grid-categories/grid-categories.component';
import { CategoryImageComponent } from './components/category-image/category-image.component';
import { ModalComponent } from './components/modal/modal.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    BabyComponent,
    NewbornComponent,
    PregnantComponent,
    FamilyComponent,
    ContactComponent,
    HomeComponent,
    CarouselComponent,
    GridComponent,
    GridCategoriesComponent,
    CategoryImageComponent,
    ModalComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        BrowserAnimationsModule,
        NgOptimizedImage,

    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
