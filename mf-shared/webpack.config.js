const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-shared',

  exposes: {
    './SharedComponent': './src/app/app.component.ts',
    './DatosIaeSharedComponent': './src/app/datos-iae/datos-iae.component.ts',
    './DatosTasasSharedComponent': './src/app/datos-tasas/datos-tasas.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
