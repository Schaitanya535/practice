import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { StageComponent } from "./stage/stage.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "userbase", pathMatch: "full" },
  { path: "stage", component: StageComponent },
  {path: "userbase", component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
