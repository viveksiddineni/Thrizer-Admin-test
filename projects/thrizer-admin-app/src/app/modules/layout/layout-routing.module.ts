import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


// const routes: Routes = [
//   {
//     path: "",
//     component: LayoutComponent,
//     children: [
//       { path: "", redirectTo: AUTH.path, pathMatch: "full" },
//       {
//         path: AUTH.path,
//         loadChildren: () =>
//           import("../auth/auth.module").then(
//             (m) => m.AuthModule
//           ),
//       },
     
//     ],
//   },
// ];

@NgModule({
  imports: [CommonModule]
})
export class LayoutRoutingModule {}
