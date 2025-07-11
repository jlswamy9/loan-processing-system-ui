import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header-component/header-component';
import { SideNavComponent } from './components/side-nav-component/side-nav-component';

@NgModule({
  declarations: [HeaderComponent,SideNavComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,SideNavComponent]
})
export class SharedModule { }
