import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PlaceAnOrderComponent } from './component/admin/products/place-an-order/place-an-order.component';
import { UpdateAnOrderComponent } from './component/admin/products/products-update-order/update-an-order.component';
import { DisplayOrderComponent } from './component/admin/products/products-display-order/display-order.component';
import { UpdateProductComponent } from './component/admin/products/products-update-stock/update-product.component';
import { DisplayDistributorComponent } from './component/admin/products/products-display-distributor/display-distributor.component';
import { TrackProductOrderComponent } from './component/admin/products/products-track-order/track-product-order.component';
import { RawmaterialUpdateComponent } from './component/admin/rawmaterials/rawmaterial-update/rawmaterial-update.component';
import { RawmaterialDisplayComponent } from './component/admin/rawmaterials/rawmaterial-display/rawmaterial-display.component';
import { RawmaterialTrackComponent } from './component/admin/rawmaterials/rawmaterial-track/rawmaterial-track.component';
import { RawmaterialStockupdateComponent } from './component/admin/rawmaterials/rawmaterial-stockupdate/rawmaterial-stockupdate.component';
import { RawmaterialSupplierComponent } from './component/admin/rawmaterials/rawmaterial-supplier/rawmaterial-supplier.component';
import { RawmaterialOrderComponent } from './component/admin/rawmaterials/rawmaterial-order/rawmaterial-order.component';
import { AddRawmaterialStockComponent } from './component/admin/rawmaterials/add-rawmaterial-stock/add-rawmaterial-stock.component';
import { AddProductStockComponent } from './component/admin/products/add-product-stock/add-product-stock.component';
import {LoginComponent} from './component/auth/login/login.component';
import {RegisterComponent} from './component/auth/register/register.component';
import {UserComponent} from './component/user/user.component';
import {AdminComponent} from './component/admin/admin.component';
import {UpdatePasswordComponent} from './component/auth/update-password/update-password.component';
import {ForgotPasswordComponent} from './component/auth/forgot-password/forgot-password.component';
import {AuthGuard} from './helpers/auth.guard';
import { Role } from './models/role.enum';



const routes: Routes =[
  {path:'home',component:HomeComponent},
      {path:'app',component:AppComponent},
      //{path: '', pathMatch:'full',redirectTo:"/login"},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'user', component: UserComponent, canActivate: [AuthGuard],data: { roles: [Role.User]}},
      {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'update-password', component: UpdatePasswordComponent},
      {path:'rawmaterial-order',component:RawmaterialOrderComponent,canActivate: [AuthGuard],data: { roles: [Role.User]}} ,
      {path:'rawmaterial-update',component:RawmaterialUpdateComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'rawmaterial-display',component:RawmaterialDisplayComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'rawmaterial-track',component:RawmaterialTrackComponent,canActivate: [AuthGuard],data: { roles: [Role.User]}} ,
      {path:'rawmaterial-addStock',component:AddRawmaterialStockComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'rawmaterial-updateStock',component:RawmaterialStockupdateComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'product-order',component:PlaceAnOrderComponent, canActivate: [AuthGuard],data: { roles: [Role.User]}} ,
      {path:'product-update',component:UpdateAnOrderComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'product-display',component:DisplayOrderComponent, canActivate: [AuthGuard],data: { roles: [Role.User]}} ,
      {path:'product-track',component:TrackProductOrderComponent,canActivate: [AuthGuard],data: { roles: [Role.User]}} ,
      {path:'supplier-display',component:RawmaterialSupplierComponent, canActivate: [AuthGuard],data: { roles: [Role.User,Role.Admin]}} ,
      {path:'distributor-display',component:DisplayDistributorComponent, canActivate: [AuthGuard],data: { roles: [Role.User,]}} ,
      {path:'product-addStock',component:AddProductStockComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'product-updateStock',component:UpdateProductComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
