import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StageComponent } from "./stage/stage.component";
import { MatMenuModule } from "@angular/material/menu";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { FormComponent } from './form/form.component';
import { AlphabetOnlyDirective } from './alphabet-only.directive'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StageComponent,
    UserComponent,
    FormComponent,
    AlphabetOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
