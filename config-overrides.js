const {
    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy,
    disableEsLint,
  } = require('customize-cra')
  
module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
  
    // disable eslint in webpack
    disableEsLint(),

    // less
    // addLessLoader(),
    addLessLoader({
        lessOptions: {
        javascriptEnabled: true,
        // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
        //relativeUrls: false,
        modifyVars: { '@brand-primary': '#1DA57A' },
        // cssModules: {
        //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
        // }
        } 
    }),

    // antd-mobile按需加载 - babel-plugin-import
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true
    })

)

/*
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader']
}
*/