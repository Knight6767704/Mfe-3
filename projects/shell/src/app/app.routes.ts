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
  //   path: 'mfe3',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: 'mfe3',
  //       exposedModule: './Module',
  //     }).then((m) => m.NavbarModule),
  // },

  {
    path: 'mfe3',
    loadChildren: () =>
      import('mfe3/NavModule').then((m) => m.NavbarModule),
  },

 

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
