import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: './src/index.js',
  format: 'cjs',
  plugins: [
    babel(),
    nodeResolve({
      // use "jsnext:main" if possible
      // see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true
    })
  ],
  sourceMap: false,
  dest: './dest/main.js'
};
