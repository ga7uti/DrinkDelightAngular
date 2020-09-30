import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/login/auth/admin/admin.component';
import { ForgotPasswordComponent } from './component/login/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/auth/login/login.component';
import { RegisterComponent } from './component/login/auth/register/register.component';
import { UpdatePasswordComponent } from './component/login/auth/update-password/update-password.component';
import { UserComponent } from './component/login/auth/user/user.component';
import { AuthGuard } from './component/login/_helpers/auth.guard';
import { Role } from './component/login/_model/role.enum';
import { AddDistributorComponent } from './component/network-Infrastructure/add-distributor/add-distributor.component';
import { AddSupplierComponent } from './component/network-Infrastructure/add-supplier/add-supplier.component';
import { AddWarehouseComponent } from './component/network-Infrastructure/add-warehouse/add-warehouse.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AddProductStockComponent } from './component/products/add-product-stock/add-product-stock.component';
import { PlaceAnOrderComponent } from './component/products/place-an-order/place-an-order.component';
import { DisplayDistributorComponent } from './component/products/products-display-distributor/display-distributor.component';
import { DisplayOrderComponent } from './component/products/products-display-order/display-order.component';
import { TrackProductOrderComponent } from './component/products/products-track-order/track-product-order.component';
import { UpdateAnOrderComponent } from './component/products/products-update-order/update-an-order.component';
import { UpdateProductComponent } from './component/products/products-update-stock/update-product.component';
import { AddRawmaterialStockComponent } from './component/rawmaterials/add-rawmaterial-stock/add-rawmaterial-stock.component';
import { RawmaterialDisplayComponent } from './component/rawmaterials/rawmaterial-display/rawmaterial-display.component';
import { RawmaterialOrderComponent } from './component/rawmaterials/rawmaterial-order/rawmaterial-order.component';
import { RawmaterialStockupdateComponent } from './component/rawmaterials/rawmaterial-stockupdate/rawmaterial-stockupdate.component';
import { RawmaterialSupplierComponent } from './component/rawmaterials/rawmaterial-supplier/rawmaterial-supplier.component';
import { RawmaterialTrackComponent } from './component/rawmaterials/rawmaterial-track/rawmaterial-track.component';
import { RawmaterialUpdateComponent } from './component/rawmaterials/rawmaterial-update/rawmaterial-update.component';


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
      {path:'add-supplier',component:AddSupplierComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'add-warehouse',component:AddWarehouseComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
      {path:'add-distributor',component:AddDistributorComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]}} ,
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
