import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { OrganizationComponent } from './organization/organization.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SideComponent } from './side/side.component';
import { AboutComponent } from './about/about.component';
import {SidebarModule} from 'primeng/sidebar';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GrdFilterPipe } from './search-filter.pipe';
import { CustomComponent } from './custom/custom.component';
import { ReversecharPipe } from './reversechar.pipe';
import {TableModule} from 'primeng/table';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import {ContextMenuModule} from 'primeng/contextmenu';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
import {ToastModule} from 'primeng/toast';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    SideComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    GrdFilterPipe,
    CustomComponent,
    ReversecharPipe,
    ContextmenuComponent,
    DragDropComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ConfirmDialogModule,
     NgxPaginationModule,
     SidebarModule,
     routing,
     TableModule,
     ContextMenuModule,
     GrowlModule,
     ToastModule,
     DragDropModule,
     CdkStepperModule,
     CdkTableModule,
     CdkTreeModule



  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
