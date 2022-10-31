import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./auth/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./auth/admin-producto/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'vertodo',
    loadChildren: () => import('./tienda/vertodo/vertodo.module').then( m => m.VertodoPageModule)
  },
  {
    path: 'pc',
    loadChildren: () => import('./tienda/pc/pc.module').then( m => m.PcPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'detailsuser/:id',
    loadChildren: () => import('./detailsuser/detailsuser.module').then( m => m.DetailsuserPageModule)
  },
  {
    path: 'detailsuser',
    loadChildren: () => import('./detailsuser/detailsuser.module').then( m => m.DetailsuserPageModule)
  },
  {
    path: 'admin-user',
    loadChildren: () => import('./auth/admin-user/admin-user.module').then( m => m.AdminUserPageModule)
  },
  {
    path: 'login-user',
    loadChildren: () => import('./authUser/login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./authUser/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./authUser/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
