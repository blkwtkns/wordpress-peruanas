// isomorphic.config.js
export default {
 webpack_assets_file_path: path.join(__dirname, 'webpack-assets.json'),
 assets: {
   images: {
     extensions: [
       'jpeg', 'jpg', 'png', 'gif', 'svg'
     ]
   },
 }
};
