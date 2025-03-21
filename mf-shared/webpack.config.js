const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-shared',

  exposes: {
    './DatosIaeSharedComponent': './src/app/datos-iae/datos-iae.component.ts',
    './DatosTasasSharedComponent': './src/app/datos-tasas/datos-tasas.component.ts',
    './DatosIbiSharedComponent': './src/app/datos-ibi/datos-ibi.component.ts',
    './DatosIvtmSharedComponent': './src/app/datos-ivtm/datos-ivtm.component.ts',
    './DatosGraphQlSharedComponent': './src/app/datos-graphql/datos-graphql.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
