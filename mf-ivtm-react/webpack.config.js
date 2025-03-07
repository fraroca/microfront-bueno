/*const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada de la aplicación
  mode: 'development',     // Modo de desarrollo
  devServer: {
    port: 3001,           // Puerto para la aplicación React
    static: {
      directory: path.join(__dirname, 'public'), // Sirve archivos estáticos desde la carpeta "public"
    },
    hot: true,            // Habilita Hot Module Replacement (HMR)
    open: true,           // Abre el navegador automáticamente
    historyApiFallback: true, // Maneja rutas en aplicaciones de una sola página (SPA)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Aplica a archivos .js y .jsx
        exclude: /node_modules/, // Ignora node_modules
        use: {
          loader: 'babel-loader', // Usa babel-loader
        },
      },
      {
        test: /\.css$/, // Aplica a archivos .css
        use: ['style-loader', 'css-loader'], // Usa style-loader y css-loader
      },
      {
        test: /\.svg$/, // Aplica a archivos .svg
        use: ['file-loader'], // Usa file-loader
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactApp',   // Nombre de la aplicación React
      filename: 'remoteEntry.js', // Archivo de entrada remoto
      exposes: {
        './App': './src/App', // Expone el componente App de React
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Plantilla HTML
    }),
  ],
};*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Import Plugin
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  entry: "./src/index", // Punto de entrada de la aplicación
  devServer: {
    static: path.join(__dirname, 'dist'),  // Reemplazamos 'contentBase' por 'static'
    // Change port to 3001
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/, // Aplica a archivos .css
        use: ['style-loader', 'css-loader'], // Usa style-loader y css-loader
      },
      {
        test: /\.svg$/, // Aplica a archivos .svg
        use: ['file-loader'], // Usa file-loader
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "headerApp",
      exposes: {
        "./Header": "./src/App",
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
