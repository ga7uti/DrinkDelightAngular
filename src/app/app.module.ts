import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router'
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
import { RawmaterialService } from './services/rawmaterial.service';
import { HttpClientModule } from '@angular/common/http';
import { NetinfraService } from './services/netinfra.service';
import { AddRawmaterialStockComponent } from './component/admin/rawmaterials/add-rawmaterial-stock/add-rawmaterial-stock.component';
import { AddProductStockComponent } from './component/admin/products/add-product-stock/add-product-stock.component';
import { ProductService } from './services/product.service';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';
import { UpdatePasswordComponent } from './component/auth/update-password/update-password.component';
import { ForgotPasswordComponent } from './component/auth/forgot-password/forgot-password.component';
import { AuthGuard } from './helpers/auth.guard';
import { Role } from './models/role.enum';
import { ProductsComponent } from './component/user/products/products.component';
import { OrdersComponent } from './component/user/orders/orders.component';
import { DetailedOrdersComponent } from './component/user/detailed-orders/detailed-orders.component';
import { PlaceOrdersComponent } from './component/user/place-orders/place-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceAnOrderComponent,
    UpdateAnOrderComponent,
    DisplayOrderComponent,
    UpdateProductComponent,
    DisplayDistributorComponent,
    TrackProductOrderComponent,
    RawmaterialOrderComponent,
    RawmaterialUpdateComponent,
    RawmaterialDisplayComponent,
    RawmaterialTrackComponent,
    RawmaterialStockupdateComponent,
    RawmaterialSupplierComponent,
    AddRawmaterialStockComponent,
    AddProductStockComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    UpdatePasswordComponent,
    ForgotPasswordComponent,
    ProductsComponent,
    OrdersComponent,
    DetailedOrdersComponent,
    PlaceOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RawmaterialService, NetinfraService, ProductService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
