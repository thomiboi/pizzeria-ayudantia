import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CustomInputComponent,
    CustomCardComponent,
    AddUpdateProductComponent,
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    CustomInputComponent,
    AddUpdateProductComponent,
    CustomCardComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
