import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { LoginbraComponent } from "./loginbra/loginbra.component";
 
export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "loginbra",
        component: LoginbraComponent
      },
    ]
  }
];
