import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [

  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.NavbarModule),
  },
  // {
  //   path: 'mfe2',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: 'mfe2',
  //       exposedModule: './Module',
  //     }).then((m) => m.AdminModule),
  // },


 

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
