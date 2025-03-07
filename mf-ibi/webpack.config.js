const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-ibi',

  /*exposes: {
    './IbiGestionComponent': './src/app/ibi-gestion/ibi-gestion.component.ts',
  },*/
  exposes: {
    // Exponemos las rutas de IBI
    './IBIRoutes': './src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

