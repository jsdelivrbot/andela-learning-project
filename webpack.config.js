var path = require('path');

module.exports = {
	entry: './assets/js/app.js',
	  output: {
	    filename: 'app.js',
	    path: __dirname + '/bundle/js'
	  },
  resolve: {
      extensions: [ '.js', '.vue'],
      alias: {
        'vue': 'vue/dist/vue.common.js',
        'src': path.resolve(__dirname, '../src'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'components': path.resolve(__dirname, '../src/components')
      }

  },
  module:
  {
  	loaders :[
	  	{
	        test: /\.vue$/,
	        loader: 'vue-loader'
	    },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
      }
  	]
  }
}