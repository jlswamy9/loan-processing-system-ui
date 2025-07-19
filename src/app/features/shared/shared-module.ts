import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header-component/header-component';
import { SideNavComponent } from './components/side-nav-component/side-nav-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent,SideNavComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[HeaderComponent,SideNavComponent]
})
export class SharedModule { }
