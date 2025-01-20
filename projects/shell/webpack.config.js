const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
  //   "mfe1": "http://localhost:4200/remoteEntry.js",
     "mfe3": "http://localhost:5000/remoteEntry.js",    
   },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
