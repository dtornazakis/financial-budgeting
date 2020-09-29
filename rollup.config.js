import copy from "rollup-plugin-copy";

export default {
  input: 'src/scripts/app.js',
  output: {
    file: 'dist/scripts/bundle.js',
    format: 'iife'
  },
  plugins: [
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist/' },
        { src: 'src/stylesheets/', dest: 'dist/' }
      ]
    })
  ]
};