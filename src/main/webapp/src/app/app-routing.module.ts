import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {TokenAuthGuard} from "./route-guards/token-auth.guard";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'products', component: ProductsComponent, canActivate: [TokenAuthGuard],
    children: [
      {path: ':id', component: ProductDetailComponent, canActivate: [TokenAuthGuard]}
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
